import { EngineContext } from "./NovelEngine";

enum CommandNames {
    'BACKGROUND'= 'background',
    'SPRITE' = 'sprite',
    'NAME' = 'name',
    'SPEECH' = 'speech',
}

export class Command {
    commandName: string
    lines: string[] = []
    complete: boolean = false
    engineContext: EngineContext

    constructor(rawCommandName: string, engineContext: EngineContext) {
        this.commandName = Command.cleanCommandName(rawCommandName);
        this.engineContext = engineContext
    }

    addLine(line: string) {
        if(line.length) {
            this.lines.push(line)
        } else {
            this.complete = true;
        }
    }

    isComplete() {
        return this.complete
    }

    isStopAfterExecution() {
        return this.commandName === CommandNames.SPEECH;
    }

    execute() {
        console.log(this.commandName);
        switch (this.commandName) {
            case CommandNames.BACKGROUND:
                this.engineContext.backgroundManager.setBackground(this.lines[0])
                break;
            case CommandNames.SPRITE:
                if (this.lines.length > 1) {
                    this.engineContext.spriteManager.setTwoSprites(this.lines[0], this.lines[1])
                } else {
                    this.engineContext.spriteManager.setSprite(this.lines[0])
                }
                break;
            case CommandNames.NAME:
                this.engineContext.dialogManager.setCharName(this.lines[0])
                break;
            case CommandNames.SPEECH:
                const text = this.lines.join('<br>')
                this.engineContext.dialogManager.setSpeech(text)
                break;
        }
    }

    static cleanCommandName(rawCommandName: string) {
        return rawCommandName.replace(/[^a-zA-Z]/g,'')
    }

    static isCommand(line: string) {
        return /<[a-zA-Z]+>/.test(line)
    }
}
