import {Project} from "./project";

export interface User {

  idperson: number,
  username: string,
  nom: string,
  prenom: string,
  mail: string,
  password: string,
  project: Project,
  }
