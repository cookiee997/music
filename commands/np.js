exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Không có nhạc để phát");
  return message.channel.send(
    `🍃 | Đang nghe nhạc bài: **${serverQueue.songs[0].title}**`
  );
};