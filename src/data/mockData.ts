export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  director: string;
  tagline: string;
  runtime: string;
  posterBg: string;
  rating: number;
  matchScore?: number;
  quote?: string;
  quoteAuthor?: string;
}

export interface Discussion {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  title: string;
  content: string;
  tags: string[];
  upvotes: string;
  comments: number;
}

export const MOVIES: Movie[] = [
  {
    id: 'inception',
    title: 'INCEPTION',
    year: 2010,
    genre: ['Sci-Fi', 'Thriller'],
    director: 'A CHRISTOPHER NOLAN FILM',
    tagline: 'YOUR MIND IS THE SCENE.',
    runtime: '2h 28m',
    posterBg: 'linear-gradient(180deg, #102030 0%, #050a10 100%)',
    rating: 4.8,
    matchScore: 95,
    quote: 'DREAMS FEEL REAL WHILE WE\'RE IN THEM.',
    quoteAuthor: 'COBB',
  },
  {
    id: 'interstellar',
    title: 'INTERSTELLAR',
    year: 2014,
    genre: ['Sci-Fi', 'Drama'],
    director: 'CHRISTOPHER NOLAN',
    tagline: 'MANKIND WAS BORN ON EARTH. IT WAS NEVER MEANT TO DIE HERE.',
    runtime: '2h 49m',
    posterBg: 'linear-gradient(180deg, #181528 0%, #080612 100%)',
    rating: 4.9,
    matchScore: 98,
  },
  {
    id: 'dune',
    title: 'DUNE',
    year: 2021,
    genre: ['Sci-Fi', 'Adventure'],
    director: 'DENIS VILLENEUVE',
    tagline: 'BEYOND FEAR, DESTINY AWAITS.',
    runtime: '2h 35m',
    posterBg: 'linear-gradient(180deg, #3d2a15 0%, #150d05 100%)',
    rating: 4.7,
    matchScore: 92,
  },
  {
    id: 'dark-knight',
    title: 'THE DARK KNIGHT',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    director: 'CHRISTOPHER NOLAN',
    tagline: 'WHY SO SERIOUS?',
    runtime: '2h 32m',
    posterBg: 'linear-gradient(180deg, #101c24 0%, #05080c 100%)',
    rating: 4.9,
    matchScore: 94,
  },
  {
    id: 'blade-runner-2049',
    title: 'BLADE RUNNER 2049',
    year: 2017,
    genre: ['Sci-Fi', 'Mystery'],
    director: 'DENIS VILLENEUVE',
    tagline: 'THERE\'S STILL A LITTLE BIT OF EVERYONE WHO ASKED.',
    runtime: '2h 44m',
    posterBg: 'linear-gradient(180deg, #3b1828 0%, #0f050b 100%)',
    rating: 4.6,
    matchScore: 89,
  },
  {
    id: 'lotr',
    title: 'LORD OF THE RINGS',
    year: 2001,
    genre: ['Fantasy', 'Adventure'],
    director: 'PETER JACKSON',
    tagline: 'ONE RING TO RULE THEM ALL.',
    runtime: '2h 58m',
    posterBg: 'linear-gradient(180deg, #2a2a10 0%, #0a0a04 100%)',
    rating: 4.9,
    matchScore: 91,
  },
  {
    id: 'arrival',
    title: 'ARRIVAL',
    year: 2016,
    genre: ['Sci-Fi', 'Drama'],
    director: 'DENIS VILLENEUVE',
    tagline: 'WHY ARE THEY HERE?',
    runtime: '1h 56m',
    posterBg: 'linear-gradient(180deg, #14222a 0%, #060b0e 100%)',
    rating: 4.7,
    matchScore: 92,
  },
  {
    id: 'tenet',
    title: 'TENET',
    year: 2020,
    genre: ['Sci-Fi', 'Action'],
    director: 'CHRISTOPHER NOLAN',
    tagline: 'TIME RUNS OUT.',
    runtime: '2h 30m',
    posterBg: 'linear-gradient(180deg, #1b2631 0%, #080c10 100%)',
    rating: 4.3,
    matchScore: 86,
  },
  {
    id: 'ex-machina',
    title: 'EX MACHINA',
    year: 2014,
    genre: ['Sci-Fi', 'Drama'],
    director: 'ALEX GARLAND',
    tagline: 'THERE IS NOTHING MORE HUMAN THAN THE WILL TO SURVIVE.',
    runtime: '1h 48m',
    posterBg: 'linear-gradient(180deg, #202426 0%, #08090a 100%)',
    rating: 4.5,
    matchScore: 85,
  },
  {
    id: 'the-prestige',
    title: 'THE PRESTIGE',
    year: 2006,
    genre: ['Drama', 'Mystery'],
    director: 'CHRISTOPHER NOLAN',
    tagline: 'ARE YOU WATCHING CLOSELY?',
    runtime: '2h 10m',
    posterBg: 'linear-gradient(180deg, #2b1f14 0%, #0c0805 100%)',
    rating: 4.7,
    matchScore: 88,
  }
];

export const DISCUSSIONS: Discussion[] = [
  {
    id: 'disc-1',
    author: 'CineExplorer',
    avatar: '🎬',
    timeAgo: '2 days ago',
    title: 'The Real Meaning Behind the Spinning Top',
    content: 'Many people think the top falling means it was a dream. But Nolan intentionally kept it ambiguous. Here\'s my detailed breakdown of the wedding ring totem...',
    tags: ['Theory', 'Ending', 'Psychological'],
    upvotes: '1.2K',
    comments: 320
  },
  {
    id: 'disc-2',
    author: 'FrameByFrame',
    avatar: '🎞️',
    timeAgo: '3 days ago',
    title: 'The City Folding Scene — A Technical Marvel',
    content: 'Practical effects mixed with mathematical CGI. Notice how the lighting angle remains mathematically coherent despite the gravity shifts...',
    tags: ['VFX & Visuals', 'Cinematography', 'Breakdown'],
    upvotes: '982',
    comments: 214
  }
];

