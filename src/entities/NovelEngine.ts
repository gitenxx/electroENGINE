import { BackgroundManager } from "./BackgroundManager";
import { DialogManager } from "./DialogManager";
import { SpriteManager } from "./SpriteManager";
import { ScriptParser } from "./ScriptParser";

export type EngineContext = {
    backgroundManager: BackgroundManager,
    spriteManager: SpriteManager,
    dialogManager: DialogManager
}

export class NovelEngine {
    engineContext: EngineContext;
    scriptParser: ScriptParser;

    constructor() {
        const backgroundManager = new BackgroundManager();
        const spriteManager = new SpriteManager()
        const dialogManager = new DialogManager()

        this.engineContext = {
            backgroundManager,
            spriteManager,
            dialogManager
        }

        this.scriptParser = new ScriptParser(this.engineContext)
    }

    selectScript(scriptName: string){
        return this.scriptParser.processScript(scriptName)
    }

    run() {
        this.scriptParser.run()
    }
}
