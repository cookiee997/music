exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (serverQueue && !serverQueue.playing) {
    serverQueue.playing = true;
    serverQueue.connection.dispatcher.resume();
    return message.channel.send("🌱 | Đã tiếp tục phát nhạc");
  }
  return message.channel.send("Không có nhạc để nghe");
};