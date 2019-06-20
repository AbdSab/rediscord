#Rediscord
######Rediscord is a mini framework based on Discord.js built with Typescript.
With Rediscord you can create easily command add filters edit events and make so much awesome things easily.  
It is based also on the Typeorm which make managing the database very easy.  
The architecture is very similiar to an MVC, You have commands as controller, models and view is the bot's response.

#Installation
To use this framework you only need first to clone the project, and install the packages.
```shell
git clone https://github.com/AbdSab/rediscord
cd rediscord
npm install
```
Then you have two config files:
- config.js
- ormconfig.js

In config.json add your token and bot prefix.
```json5
{
    "token": "your bot token",
    "prefix": "your custom prefix" 
}
```
As for ormconfig.json, you need to provide your database info.
```json5
{
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "database_name",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/**/*.ts"
    ]
 }
```

#Usage
After installing, your bot should be working well and ready to be developed.

####Add command
To create a command you simply need to create a class in commands folder that implements ICommand interface.
To activate the command you will have to attach it to commands map in commands/index.ts
#####Example
First create a .ts file in commands, HiCommand.ts :
```typescript
import ICommand from './ICommand';

export default class HiCommand implements ICommand{
    name: string = "hi";
    filters: string[] = []; //The filters to be applied to this command we will see this later

    //The code to be executed as a command.
    async execute(source:any, args: string[]){
        //source is the message source object in which you can retrieve required data
        //args are arguments provided to the command.
        source.channel.send(`Hello <@${source.author.id}>`)
            .catch(err=>console.log(err));
    }
}
```
Now to activate this command, you only need to add to the commands list.
in commands/index.ts :
```typescript
import ICommand from './ICommand';
import HiCommand from './HiCommand'; //You need to import the class

const commands:Map<string ,ICommand> = new Map();

//Adding the command, if user type hi, the command will be executed.
commands.set("hi", new HiCommand());

export default commands;
```
That's it for making a command.  
If you say hi to your bot, it will respond with a hello \<yourname\>
