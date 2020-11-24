export interface IComment {
  name: string;
  special: string;
  content: string;
  avatar: string;
}
export interface IPeople {
  id: number;
  name: string;
  position: string;
  description: string;
  avatar: any;
}
export interface IPeopleFormData {
  name: string;
  position: string;
  description: string;
  avatar: any;
}

export interface IPoepleAction {
  type: "add" | "delete" | "edit";
  payload: any;
}
