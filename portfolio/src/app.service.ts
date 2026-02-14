import { Injectable } from '@nestjs/common';

export interface Section {
  id: string;
  title: string;
  icon: string;
}

@Injectable()
export class AppService {
  getSections(): Section[] {
    return [
      { id: 'home', title: 'Home', icon: 'Home' },
      { id: 'about', title: 'About', icon: 'User' },
      { id: 'skills', title: 'Skills', icon: 'Code2' },
      { id: 'projects', title: 'Project Experience', icon: 'Briefcase' },
      { id: 'contact', title: 'Contact', icon: 'Mail' },
    ];
  }
}
