# Self-Guided Workshop

### Fork the Starter Code

[https://replit.com/@KeenanNguyen3/Discord-Bot-Workshop-Starter-Code](https://replit.com/@KeenanNguyen3/Discord-Bot-Workshop-Starter-Code)

### Login to the Discord Developer Portal

If you don’t already have a Discord account. You need to register. You must verify your email in order to create a bot.

[Discord - A New Way to Chat with Friends & Communities](https://discord.com/login?redirect_to=/developers/applications)

### Create a New Application

If your email isn’t verified, this won’t work.

![Untitled](Self-Guided%20Workshop%2018c703bda79b41619b2411acfe9c6b10/Untitled.png)

### Get the Bot’s Token

From the home page of your application, navigate to the Bot tab, from there you can copy the token. You may need to reset the token.

![Untitled](Self-Guided%20Workshop%2018c703bda79b41619b2411acfe9c6b10/Untitled%201.png)

### Paste the Bot’s Token into your Repl’s Secrets

Make sure the key is “TOKEN”. Press “Add Secret” to finish.

![Untitled](Self-Guided%20Workshop%2018c703bda79b41619b2411acfe9c6b10/Untitled%202.png)

### Create your own Discord Server

There is a “plus” icon at the bottom of the server’s sidebar on the left.

### Invite your Bot

The URL you will use to invite your bot is at the bottom of the page.

Make sure you select:

- applications.commands
- bot

![Untitled](Self-Guided%20Workshop%2018c703bda79b41619b2411acfe9c6b10/Untitled%203.png)

### Getting your Server’s ID

In your Discord settings, navigate to “Advanced” and enable “Developer Mode”.

From there, control-click (right-click) on your server’s icon. 

At the bottom, there will be an option to copy your server’s ID.

Paste your server ID here:

![Untitled](Self-Guided%20Workshop%2018c703bda79b41619b2411acfe9c6b10/Untitled%204.png)

### Connecting your Bot to Repl.it

Press the green “run” button on Repl.it.

Then, navigate to the “interactions endpoint url” field.

Your URL is: https://(YOUR REPL’s NAME).(YOUR REPL USERNAME).repl.co

For example:

Name: mybot Username: keenan

https://mybot.keenan.repl.co

![Untitled](Self-Guided%20Workshop%2018c703bda79b41619b2411acfe9c6b10/Untitled%205.png)

### First Command: identify

This command will show a modal asking for you to identify yourself.

Let’s start with declaring our command:

```python
### - Start of Commands - 

@client.include
@crescent.command
async def identify(ctx):

### - End of Commands -
```

Next, let’s create the modal (pop-up window):

```python
### - Start of Commands - 

@client.include
@crescent.command
async def identify(ctx):
    action_row = ctx.client.app.rest.build_modal_action_row()
    action_row.add_text_input("name_input", "Enter your name:")

    await ctx.interaction.create_modal_response("Steve wants you to identify yourself.", "identify_modal", action_row)

### - End of Commands -
```

Finally, let’s respond to the modal:

```python
async def on_modal_interaction(interaction: hikari.ModalInteraction):
    if interaction.custom_id == "identify_modal":
        name = interaction.components[0].components[0].value
        return interaction.build_response().set_content(f"`{name}`, you are under arrest!")
```

** This function is already defined at the top. You just need to put the code inside of it. 

### Second Command: arrest

Let’s create an arrest command, so we can arrest naughty users.

```python
### - Start of Commands - 

@client.include
@crescent.user_command
async def arrest(ctx, user):
    embed = hikari.Embed(title="An arrest has been issued!", description=f"{user.mention} is under arrest for no reason!")
    embed.set_image(user.display_avatar_url)

    await ctx.respond(embed=embed)

### - End of Commands -
```

### Third Command: bribe

Let’s create a bribe command:

```python
### - Start of Commands - 

@client.include
@crescent.message_command
async def bribe(ctx, message):
    content = message.content
    print(content)
    if "💰" in content:
        await ctx.respond("*discreetly takes money*")
    else:
        await ctx.respond("What are you trying to do?")

### - End of Commands -
```

### A Final Note:

Each of these examples shows a different type of command:

- Slash Command
- User Command
- Message Command

**What’s the difference?**

- Slash commands are the most used commands. These commands involve typing a “slash” to invoke them.
- User commands are commands that can be activated when you right-click on a user. They take 1 argument: the user who was pressed.
- Message commands are commands that can be activated when you right-click on a message. They take 1 argument: the message that it was used on.