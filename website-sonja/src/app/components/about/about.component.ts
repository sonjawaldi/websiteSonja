import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSkillsTableComponent } from './about-skills-table.component';

@Component({
  selector: 'app-about',
  imports: [CommonModule, AboutSkillsTableComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: true
})
export class AboutComponent implements OnInit {
  age: number = 0;
  showMoreSkills: boolean = false;
  showPodiumsdiskussion: boolean = false;

  ngOnInit() {
    this.age = this.calculateAge(new Date(2002, 10, 16)); // 16.11.2002 (Monat ist 0-basiert)
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  @HostListener('document:keydown.escape')
  closePodiumsdiskussion(): void {
    this.showPodiumsdiskussion = false;
  }

  toggleSkills(): void {
    this.showMoreSkills = !this.showMoreSkills;
  }
}
