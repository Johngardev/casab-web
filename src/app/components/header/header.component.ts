import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;
  isDarkMode = false;

  ngOnInit(): void {
    const saved = localStorage.getItem('theme');
    this.isDarkMode = saved ? saved === 'dark' : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyDark(this.isDarkMode);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDark(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyDark(this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private applyDark(enable: boolean): void {
    const root = document.documentElement;
    root.classList.toggle('dark', enable);
  }
 }
