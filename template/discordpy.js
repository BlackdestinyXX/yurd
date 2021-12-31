const mainpy = `import discord

class Client(discord.Client):
    async def on_ready(self):
        print(self.user, ' Online!')

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return

        # if message.content == 'command_name':
        # Code....
        # Exemple: await message.channel.send('Hello Word!')

client = Client()
client.run('')`


module.exports = {
    code: [{fileName: 'main.py', fileCode: mainpy}],
    name: ['discord.py', 'discordpy'],
    dependenciesCommand: 'py -3 -m pip install -U discord.py'
}