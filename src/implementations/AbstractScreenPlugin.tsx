import { observable } from "mobx";
import { EventHandler } from "@origam/utils";
import { IScreenPlugin } from "../types/IScreenPlugin";
import { IScreenPluginData } from "../types/IScreenPluginData";
import { ILocalization } from "../types/ILocalization";
import { ILocalizer } from "../types/ILocalizer";

export abstract class AbstractScreenPlugin implements IScreenPlugin {
  $type_IScreenPlugin: 1 = 1; // required by the isIScreenPlugin function
  id: string = ""

  @observable
  initialized = false;

  refreshHandler = new EventHandler();

  requestSessionRefresh: (() => Promise<any>) | undefined;

  setScreenParameters: ((parameters: { [p: string]: string }) => void) | undefined;

  abstract getComponent(data: IScreenPluginData, createLocalizer: (localizations: ILocalization[]) => ILocalizer): JSX.Element

  onSessionRefreshed() {
    this.refreshHandler.call();
  }

  initialize(xmlAttributes: { [key: string]: string }): void {
    this.initialized = true;
  }
}