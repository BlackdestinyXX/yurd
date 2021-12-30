local discordia = require('discordia')
local client = discordia.Client()

-- For first download discordia wrapper with the command lit install SinisterRectus/discordia
-- To install Luvit (lit, luvi, luvit), visit https://luvit.io and follow the instructions provided for your platform.

client:on('ready', function()
	print('[Yurd] Logged in '.. client.user.username)
end)

client:on('messageCreate', function(message)
	if message.content == '!ping' then
		message.channel:send('Pong!')
	end
end)

client:run('Your bot token here')
