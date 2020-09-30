exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Bot không thể skip bài vì bạn không có mặt trong room voice"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue)
    return message.channel.send(
      "Không có bài nên bot không thể bỏ qua."
    );
  serverQueue.connection.dispatcher.end("💐| Bài hát đã được skip bởi người dùng");
};