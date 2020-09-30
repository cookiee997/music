exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    return message.channel.send("🌴 | Đã tạm dừng nhạc của bạn");
  }
  return message.channel.send("Không có nhạc để nghe.");
};