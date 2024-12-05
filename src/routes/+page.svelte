<script>
  import Button from '$lib/componets/Button.svelte';

  const skills = [
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  const experiences = [
    {
      company: 'Freelance',
      role: 'Flutter Developer',
      period: '2022 - Present',
      description: 'Building production-ready mobile and web applications using Flutter and Firebase.'
    },
    {
      company: 'Various Projects',
      role: 'Mobile App Developer',
      period: '2020 - 2022',
      description: 'Developed multiple mobile applications focusing on user experience and performance.'
    }
  ];

  const projects = [
    {
      title: 'Chat App',
      description: 'Real-time chat application with secure and scalable architecture.',
      image: 'https://placehold.co/600x400/161513/ffffff?text=Chat+App',
      technologies: ['Flutter', 'Firebase', 'Provider'],
      features: [
        'Real-time messaging with Firebase Firestore',
        'Firebase Authentication',
        'Intuitive UI with Flutter',
        'State management with Provider'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with modern web technologies.',
      image: 'https://placehold.co/600x400/161513/ffffff?text=Portfolio',
      technologies: ['Svelte', 'TailwindCSS'],
      features: [
        'Responsive design',
        'Modern UI/UX',
        'Optimized performance',
        'SEO friendly'
      ]
    }
  ];
</script>

<!-- Hero Section -->
<section id="home" class="flex min-h-screen items-center justify-center bg-[#161513] pt-24">
  <div class="container mx-auto px-4">
    <div class="mx-auto max-w-3xl text-center">
      <!-- Profile Image -->
      <div class="mb-8 flex justify-center">
        <div class="relative h-32 w-32 overflow-hidden rounded-full bg-gradient-to-r from-[#E84545] to-[#904E95] p-1">
          <img
            src="https://placehold.co/400/161513/ffffff?text=AN"
            alt="Ahammed Nibras"
            class="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <!-- Headline -->
      <h1 class="mb-6 text-4xl font-bold text-white md:text-5xl">
        I create amazing
        <span class="bg-gradient-to-r from-[#E84545] to-[#904E95] bg-clip-text text-transparent">mobile apps</span>
        with Flutter!
      </h1>

      <!-- Description -->
      <p class="mb-8 text-lg leading-relaxed text-white/60">
        Passionate Flutter Developer with expertise in building production-ready mobile applications.
        Specialized in creating seamless user experiences with Flutter and Firebase.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <Button href="#contact" variant="primary">Get in Touch</Button>
        <Button href="/cv.pdf" variant="outline">Download CV</Button>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section class="bg-[#161513] py-20">
  <div class="container mx-auto px-4">
    <h2 class="mb-16 text-center text-2xl font-semibold text-white">SKILLS & TECHNOLOGIES</h2>
    <div class="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-5">
      {#each skills as skill}
        <div class="group flex flex-col items-center">
          <div class="mb-4 h-16 w-16 overflow-hidden rounded-lg bg-white/10 p-3 transition-all duration-300 group-hover:scale-110">
            <img src={skill.icon} alt={skill.name} class="h-full w-full object-contain" />
          </div>
          <span class="text-sm text-white/60">{skill.name}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="bg-[#161513] py-20">
  <div class="container mx-auto px-4">
    <h2 class="mb-16 text-center text-3xl font-bold text-[#E84545]">FEATURED PROJECTS</h2>
    <div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
      {#each projects as project}
        <div class="group overflow-hidden rounded-xl bg-white/5 p-6 transition-all duration-300 hover:bg-white/10">
          <img src={project.image} alt={project.title} class="mb-6 h-48 w-full rounded-lg object-cover" />
          <h3 class="mb-2 text-xl font-semibold text-white">{project.title}</h3>
          <p class="mb-4 text-white/60">{project.description}</p>
          
          <!-- Technologies -->
          <div class="mb-4 flex flex-wrap gap-2">
            {#each project.technologies as tech}
              <span class="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80">{tech}</span>
            {/each}
          </div>

          <!-- Features -->
          <ul class="ml-5 list-disc space-y-1 text-white/60">
            {#each project.features as feature}
              <li>{feature}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Experience Section -->
<section id="experience" class="bg-[#161513] py-20">
  <div class="container mx-auto px-4">
    <h2 class="mb-16 text-center text-3xl font-bold text-[#4EA5D9]">EXPERIENCE</h2>
    <div class="mx-auto max-w-3xl space-y-12">
      {#each experiences as exp}
        <div class="relative border-l border-white/20 pl-8">
          <div class="absolute -left-1.5 h-3 w-3 rounded-full bg-white/20"></div>
          <h3 class="mb-1 text-xl font-semibold text-white">{exp.role}</h3>
          <p class="mb-2 text-[#E84545]">{exp.company} | {exp.period}</p>
          <p class="text-white/60">{exp.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="bg-[#161513] py-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="mb-8 text-2xl font-semibold text-white">GET IN TOUCH</h2>
    <p class="mx-auto mb-8 max-w-2xl text-white/60">
      Looking for a Flutter developer who can bring your app ideas to life? Let's connect and discuss how we can work together!
    </p>
    <p class="text-lg text-white/80">ahammednibras737@gmail.com</p>
    <div class="mt-6 flex justify-center gap-6">
      <a
        href="https://github.com/ahammednibras8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub profile"
        class="text-white/60 transition-colors duration-300 hover:text-white"
      >
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.236-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </a>
      <a
        href="https://twitter.com/ahammednibras8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter"
        class="text-white/60 transition-colors duration-300 hover:text-white"
      >
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/ahammednibras8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with me on LinkedIn"
        class="text-white/60 transition-colors duration-300 hover:text-white"
      >
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  </div>
</section>