const apppy = `import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='>')

@bot.event
async def on_ready():
    print('Ready!')

# Command Example
#@bot.command()
#async def ping(ctx):
#    await ctx.send('Pong!')
#
# or
#
# @bot.event
#async def on_message(message):
#    if message.content == "pong":
#        await message.channel.send('ping')

bot.run('token')`


module.exports = {
    apppy
}