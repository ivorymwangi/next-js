import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Projects.module.css';

// All project data lives in one array. Every object has the same
// shape (title, description, tags, image, liveUrl, repoUrl), which
// is what lets ProjectCard render any of them with the same markup.
//
// TODO: replace the placeholder image + links below with your real
// screenshots, deployed URLs and GitHub repo links.
const projects = [
  {
    title: 'Daraja M-Pesa Checkout',
    description:
      'A two-page checkout flow for a small beauty store, using the Safaricom Daraja API to trigger an STK Push payment prompt.',
    tags: ['React', 'API integration', 'M-Pesa'],
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqRgoFg56743COT8YXJis53YTZC18b45_8P-oM7ovNQ&s=10',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Todo List App',
    description:
      'A task manager built with AddTask, ListTask and Task components — add, filter by done/not done, and edit tasks in place.',
    tags: ['React', 'Hooks', 'CRUD'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdg3yzrsRUcB5mCGhmrKe5ICTtB9LAiXa5DZAn2rYfw&s=10',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'User Directory',
    description:
      'Fetches a live user list from the JSONPlaceholder API with axios inside useEffect, then maps the results into a card layout.',
    tags: ['React', 'useEffect', 'Axios'],
    image: 'https://placehold.co/480x360/d98ca0/fffdfb?text=User+Directory',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Akan Name Generator',
    description:
      'A vanilla JavaScript DOM project that works out a traditional Akan day-name from a birth date, using form handling and date parsing.',
    tags: ['JavaScript', 'DOM'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dFRsK4pwsPI08d9tXw31AKS5_Lg6oQc17qYvPnwKHQ&s',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Movie App',
    description:
      'A browsable movie catalogue split into MovieCard, MovieList and Filter components to practise passing data between them.',
    tags: ['React', 'Components'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2vNELU4P0_jeyMIYlIHVuNTFLPncjnLKWg8cJLLmMw&s=10',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: "Ivory's Lifestyle Blog",
    description:
      'A multi-page Bootstrap 5 site on beauty, wellness and style, with a CSS keyframes ticker animation and no JavaScript.',
    tags: ['Bootstrap', 'CSS animation'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bDmG3ZZ8cskTH4wLnJUcI59cT_6zHdLpkXbGQg6YVQ&s=10',
    liveUrl: '#',
    repoUrl: '#',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects — Ivory Mwangi</title>
      </Head>

      <Navbar />

      <main className="page">
        <section className={styles.section}>
          <p className={styles.eyebrow}>My work</p>
          <h1 className={styles.heading}>Projects</h1>
          <p className={styles.intro}>
            A selection of what I&apos;ve built while learning — from vanilla
            JavaScript through to React apps that talk to real APIs.
          </p>

          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
