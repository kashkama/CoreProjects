module ToDoList {
	export interface infoTask{
		description:string;
		done:boolean;
		priority:string;
		markDone():void;

	}
	export class Task implements infoTask{
		done:boolean=false;
		constructor(public decription:string,public priority:string){
			markDone(){
				this.done=true;
			}
		}
	}
	export class HobbyTask extends Task{
		constructor(public description:string,public priority:string){
			super(description,priority);
		}
	}
}