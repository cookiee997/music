exports.run = (client, message, args) => {
  const serverQueue = message.client.queue.get(message.guild.id);
  if (!serverQueue) return message.channel.send("Không có nhạc để phát.");
  return message.channel.send(`
__**<:A84_Love_ThaTim:748944528097935531> | Danh sách bài hát:**__

${serverQueue.songs.map((song) => `**-** ${song.title}`).join("\n")}

**🌳 | Đang nghe:** ${serverQueue.songs[0].title}
		`);
};