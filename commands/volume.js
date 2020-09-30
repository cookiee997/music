exports.run = (client, message, args) => {
  const { channel } = message.member.voice;
  if (!channel)
    return message.channel.send(
      "Bot không thể skip bài vì bạn không có mặt trong room voice"
    );
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Bot không có nhạc để phát.");
  if (!args[0])
    return message.channel.send(
      `Âm lượng hiện tại là: **${serverQueue.volume}**`
    );
  serverQueue.volume = args[0]; 
  serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 4);
  return message.channel.send(`🌻| Bạn đã set âm lượng đó là **${args[0]}**`);
};