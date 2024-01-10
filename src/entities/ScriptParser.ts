import { EngineContext } from "./NovelEngine";

const fs = require('fs').promises;

const BACKGROUND_PATH = 'content/scripts/';
import { Command } from './Command'

export class ScriptParser {
    engineContext: EngineContext
    commandsList: Command[] = []
    generatorInstance: Generator

    constructor(engineContext: EngineContext) {
        this.engineContext = engineContext;
    }

    processScript(scriptName: string) {
        return this.loadScript(scriptName)
            .then(scriptLines => {
                this.splitByCommands(scriptLines)
                this.generatorInstance = this.generator()
            })
    }

    loadScript(scriptName: string) {
        const path = `${__dirname}/../${BACKGROUND_PATH}${scriptName}`
        return fs.readFile(path, { encoding: 'utf8' })
            .then(data => {
                return data.split(/\r?\n/);
            })
    }

    splitByCommands(linesArray: string[]) {
        let currentCommand: Command | null = null;
        for (const line of linesArray) {
            if (currentCommand?.isComplete()) {
                this.commandsList.push(currentCommand);
            }
            if (Command.isCommand(line)) {
                currentCommand = new Command(line, this.engineContext);
            } else {
                currentCommand && currentCommand.addLine(line)
            }
        }
    }

    *generator() {
        for (let command of this.commandsList) {
            command.execute()
            if (command.isStopAfterExecution()) {
                yield
            }
        }
    }

    run() {
        this.generatorInstance.next()
    }
}
