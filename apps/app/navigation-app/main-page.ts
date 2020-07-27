import { NavigatedData } from "tns-core-modules/ui/page";
import {
    topmost,
    NavigationEntry
} from "tns-core-modules/ui/frame";

export function nav() {
    const e: NavigationEntry = {
        moduleName: "navigation-app/main-page"
    }
    topmost().navigate(e)
}
export function navClearTrans() {
    console.log("transition and clear history")

    const e: NavigationEntry = {
        transition: {
            name: "slideLeft",
            curve: "linear"
        },
        clearHistory: true,
        moduleName: "navigation-app/main-page"
    }
    topmost().navigate(e)
}

export function navWithTransition() {
    console.log("transition and not clear history")

    const e: NavigationEntry = {
        transition: {
            name: "slideLeft",
            curve: "linear"
        },
        moduleName: "navigation-app/main-page"
    }
    topmost().navigate(e)
}

export function navWithClear() {
    console.log("clear history")

    const e: NavigationEntry = {
        clearHistory: true,
        moduleName: "navigation-app/main-page"
    }
    topmost().navigate(e)
}

export function navigatedFrom(args: NavigatedData) {
    console.log(`navigatedFrom ${args.object.toString()}  isBack: ${args.isBackNavigation}`)
}

export function navigatedTo(args: NavigatedData) {
    console.log(`navigatedTo ${args.object.toString()}  isBack: ${args.isBackNavigation}`)
}

export function navigatingTo(args: NavigatedData) {
    const colors = ["lightgreen", "lightblue", "lightcoral"];
    let i = 0;

    if (!args.isBackNavigation) {
        (<any>args.object).page.backgroundColor = colors[(i++) % 3];
        const array = new Array();
        for (let i = 0; i < 50; i++) {
            array[i] = i;
        }
        (<any>args.object).page.bindingContext = array;
    }
    console.log(`navigatingTo ${args.object.toString()}  isBack: ${args.isBackNavigation}`)
}

export function navigatingFrom(args: NavigatedData) {
    console.log(`navigatingFrom ${args.object.toString()}  isBack: ${args.isBackNavigation}`)
}
