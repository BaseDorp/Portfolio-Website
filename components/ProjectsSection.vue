<template>
  <div class="max-w-6xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
    
    <div class="space-y-4">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600/50"
      >
        <!-- Accordion Header -->
        <button
          @click="toggleProject(index)"
          class="w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-700/30 transition-colors duration-200"
        >
          <!-- Mobile: Stack vertically, Desktop: Side by side -->
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <!-- Title Section -->
            <div class="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
              <!-- Arrow Icon -->
              <div class="flex-shrink-0">
                <svg
                  :class="[
                    'w-5 h-5 sm:w-6 sm:h-6 text-blue-400 transition-transform duration-300',
                    openProject === index ? 'rotate-90' : ''
                  ]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              <!-- Project Title -->
              <h3 class="text-lg sm:text-xl font-semibold text-white min-w-0 flex-1">{{ project.title }}</h3>
            </div>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 ml-8 sm:ml-0 sm:flex-shrink-0">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 text-xs sm:text-sm rounded-full border border-blue-500/30"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </button>
        
        <!-- Accordion Content -->
        <div
          :class="[
            'transition-all duration-300 ease-in-out overflow-hidden',
            openProject === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          ]"
        >
          <div class="px-6 pb-6">
            <div class="border-t border-gray-700/50 pt-6">
              
              <!-- Media Content -->
              <div class="mb-6">
                <!-- Slideshow for multiple media -->
                <div v-if="project.media && project.media.length > 1" class="relative">
                  <div class="relative overflow-hidden rounded-lg bg-gray-900">
                    <div
                      class="flex transition-transform duration-500 ease-in-out"
                      :style="{ transform: `translateX(-${currentSlides[index] * 100}%)` }"
                    >
                      <div
                        v-for="(media, mediaIndex) in project.media"
                        :key="mediaIndex"
                        class="w-full flex-shrink-0"
                      >
                        <div class="aspect-video flex items-center justify-center">
                          <!-- Video Embed -->
                          <iframe
                            v-if="media.type === 'video'"
                            :src="media.url"
                            class="w-full h-full"
                            frameborder="0"
                            allowfullscreen
                            :title="media.title || 'Video'"
                          ></iframe>
                          
                          <!-- Image -->
                          <img
                            v-else-if="media.type === 'image'"
                            :src="media.url"
                            :alt="media.alt || 'Project image'"
                            class="w-full h-full object-cover"
                          />
                          
                          <!-- GIF -->
                          <img
                            v-else-if="media.type === 'gif'"
                            :src="media.url"
                            :alt="media.alt || 'Project animation'"
                            class="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Slideshow Controls -->
                  <div class="flex items-center justify-center mt-4 space-x-4">
                    <button
                      @click="previousSlide(index)"
                      class="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
                      :disabled="project.media.length <= 1"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <!-- Slide Indicators -->
                    <div class="flex space-x-2">
                      <button
                        v-for="(_, slideIndex) in project.media"
                        :key="slideIndex"
                        @click="goToSlide(index, slideIndex)"
                        :class="[
                          'w-2 h-2 rounded-full transition-colors',
                          currentSlides[index] === slideIndex ? 'bg-blue-400' : 'bg-gray-600'
                        ]"
                      ></button>
                    </div>
                    
                    <button
                      @click="nextSlide(index)"
                      class="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white transition-colors"
                      :disabled="project.media.length <= 1"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <!-- Single Media -->
                <div v-else-if="project.media && project.media.length === 1" class="rounded-lg overflow-hidden bg-gray-900">
                  <div class="aspect-video flex items-center justify-center">
                    <iframe
                      v-if="project.media[0].type === 'video'"
                      :src="project.media[0].url"
                      class="w-full h-full"
                      frameborder="0"
                      allowfullscreen
                      :title="project.media[0].title || 'Video'"
                    ></iframe>
                    
                    <img
                      v-else
                      :src="project.media[0].url"
                      :alt="project.media[0].alt || 'Project image'"
                      :class="[
                        'max-w-full max-h-full',
                        project.media[0].type === 'gif' ? 'object-contain' : 'object-cover w-full h-full'
                      ]"
                    />
                  </div>
                </div>
              </div>
                            
              <!-- Project Description -->
              <div class="flex flex-col lg:flex-row gap-6">
                <!-- Links -->
                <div v-if="project.links && project.links.length > 0" class="flex gap-4 lg:flex-col lg:w-20">
                  <a
                    v-for="link in project.links"
                    :key="link.type"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
                    :title="link.title"
                  >
                    <svg v-if="link.type === 'github'" class="w-6 h-6 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <svg v-else-if="link.type === 'external'" class="w-6 h-6 text-gray-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <!-- Description Text -->
                <div class="flex-1 text-gray-300 leading-relaxed space-y-4">
                  <p v-for="paragraph in project.description" :key="paragraph" v-html="paragraph"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Reactive state for managing open accordions and current slides
const openProject = ref(null) // Only one project open at a time
const currentSlides = reactive({})

// Sample projects data - replace with your actual data
const projects = ref([
  { // Heroverse
    id: 'heroverse',
    title: 'Online Multiplayer RPG',
    tags: ['Unreal Engine', 'Blueprints'],
    media: [
      {
        type: 'video',
        url: 'https://youtube.com/embed/PGHxwAhgGXE',
        title: "Replication Demo"
      }
    ],
    description: [
      'My latest personal project has been creating a online multiplayer role playing game. I am working on this project to increase my knowledge in the development pipeline of Unreal Engine, as well as dive deeper into how online mutliplayer works with UE5 and Epic Online Subsystems.',
      'As of writing this, the game contains',
      '- Player Online Mutliplayer Replication',
      '- Player Controller (idle/walk/run/jump/3-attack combo)',
      '- Player vs Player and Player vs Enemy Collision and Damage',
      '- Player Camera Controls',
      '- More in the works',
      'Two of my biggest learnings with this project so far are 1) Learning the replication systems inside unreal, and 2) Animation Blueprints inside. Knowing state driven animation in Unity, ABPs have a lot to offer one you understand the system.'
    ],
    links: []
  },
  { // Quadtrees Asteroids
    id: 'asteroids',
    title: 'Asteroids with Quadtrees',
    tags: ['C++', 'Collision Detection'],
    media: [
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/-045Ykvdxnw',
        title: 'Asteroids with Quadtrees Demo'
      }
    ],
    description: [
      'This is a recreation of the Asteroids arcade game using the olc::PixelGameEngine. My goals for this project were: Learn more about collision detection, take some time working without a game engine, and brush up on my C++ knowledge.',
      'In this game, collision checks are determined by quadtrees. During the program, each object is added to the base quadtree. When more than \'x\' amount of objects get put into that quadtree, the quadtree subdivides into 4 equally divided sub-quadtrees. This happens recursively until all objects are placed into their appropriate quadtree.',
      'Now that all the objects are inside a quadtree, I only have to do collision checks between objects in that same bounding box. This saves time on performance and I do not have to do a collision check between objects that are not close to each other in the scene.'
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/BaseDorp/Asteroids-olcPixelGameEngine',
        title: 'View on GitHub'
      }
    ]
  },
  { // VFX
    id: 'vfx',
    title: 'VFX',
    tags: ['Unreal Engine', 'Niagara', 'VFX'],
    media: [
      {
        type: 'gif',
        url: '/images/Animation.gif',
        alt: 'Character aura VFX animation'
      }
    ],
    description: [
      '***collecting more pictures***'
    ],
    links: []
  },
  { // Tanks Game
    id: 'tanks-game',
    title: 'Unity Tabletop Tanks Game',
    tags: ['C#', 'Unity', 'AI'],
    media: [
      {
        type: 'video',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6889116705612726272?compact=1',
        title: 'Tanks Game LinkedIn Post'
      },
      {
        type: 'video',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6838678841574203392?compact=1',
        title: 'Tanks Game Development Update'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/aeH1vH9dCbE',
        title: 'Tanks Game Gameplay'
      }
    ],
    description: [
      'This is a tabletop-style tank game, based on the Wii Play Tanks game, that I made for my AI Programming final and have continued to work on post-graduation. The project is updated for Unity\'s new input system and allows for local multiplayer using multiple controllers with the option to change each player\'s inputs and customize their tank on the pause menu.',
      'There are multiple different types of tanks in the game including, a basic non-mobile tank, a mobile tank that chases the closest player, a missile tank, and a stationary radar tank. All of these tanks prioritize their closest player and share intel with other tanks in the level. The bullets and missiles used in the game are being reused using Object Pooling for better scalability and performance with more complex levels.'
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/BaseDorp/TankGame',
        title: 'View on GitHub'
      }
    ]
  },
  { // 3D Modeling
    id: '3d-modeling',
    title: '3D Modeling',
    tags: ['Maya', 'ZBrush'],
    media: [
      {
        type: 'image',
        url: '/images/SamHirsch_Tank_Final_Lowpoly3.jpg',
        alt: 'Toy tank model - angle view'
      },
      {
        type: 'image',
        url: '/images/SamHirsch_Tank_Final_Lowpoly4.jpg',
        alt: 'Toy tank model - side view'
      },
      {
        type: 'image',
        url: '/images/SamHirsch_Tank_Final_Lowpoly5.jpg',
        alt: 'Toy tank model - front view'
      },
      {
        type: 'image',
        url: '/images/tank_unwrapped.jpg',
        alt: 'Tank UV unwrap layout'
      },
      {
        type: 'image',
        url: '/images/DeskRender1.jpg',
        alt: 'L-shaped computer desk render - view 1'
      },
      {
        type: 'image',
        url: '/images/DeskRender2.jpg',
        alt: 'L-shaped computer desk render - view 2'
      },
      {
        type: 'image',
        url: '/images/WireframeDesk.jpg',
        alt: 'Computer desk wireframe view'
      },
      {
        type: 'image',
        url: '/images/SamHirsch_Magikarp_Highpoly_web.jpg',
        alt: 'Magikarp Pokemon model made in ZBrush'
      }
    ],
    description: [
      'This is a collection of assets I have made through my art and animation minor.',
      'Featured works include a toy tank used for my Unity Tank Game, an L-shaped computer desk with detailed modeling and texturing, and a Magikarp from Pokemon sculpted using ZBrush.',
      'These projects demonstrate skills in both hard surface modeling in Maya and organic sculpting in ZBrush, showcasing different approaches to 3D asset creation.'
    ],
    links: []
  }, 
  { // Grapple Game Capstone
    id: 'grapple-game',
    title: 'Hardcore Pizza Delivery (Grapple Game)',
    tags: ['C++', 'Unreal Engine', 'Team'],
    media: [
      {
        type: 'image',
        url: '/images/HCPDMenuScreenshot.PNG',
        alt: 'Game main menu screenshot'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/WMkVaMJYpKM',
        title: 'Hardcore Pizza Delivery Gameplay'
      },
      {
        type: 'gif',
        url: '/images/SlackIndicator.gif',
        alt: 'Slack Gun Material animation'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/embed/B6HCUprDkls',
        title: 'Pizza Delivery Mechanics'
      }
    ],
    description: [
      'Hardcore Pizza Delivery is a project I was a part of consisting of nine other juniors and seniors as a capstone project and made using Unreal Engine 4 with a mix of C++ and Blueprints. In Hardcore Pizza Delivery, the player has to deliver pizza while swinging around various environments.',
      'On this project, I worked as a general programmer and worked on features such as developing the checkpoints/out-of-bounds system for the designer\'s use, grapple fire collision checking through raycasting, and a visual indicator on the grapple gun to see how much rope the player had left using Unreal\'s material system. I also helped the designers and artists with any problems they came across like blueprint debugging and importing meshes and materials.'
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Kobakat/GrappleGame',
        title: 'View on GitHub'
      }
    ]
  },
  { // HTML Drawing App
    id: 'canvas-app',
    title: 'Canvas Drawing App',
    tags: ['JavaScript', 'Canvas'],
    media: [
      {
        type: 'image',
        url: '/images/SunflowerCanvasDrawing.jpg',
        alt: 'Drawing of a flower made in the canvas app'
      }
    ],
    description: [
      'Here is a web drawing application made using Javascript and the HTML canvas element. In this application you can use multiple tools, like a line tool, circle, and square tool, to create a drawing. The application also supports layering.',
      'Each layer can be toggled on and off anytime as well as add and deleting layers while keeping the other layer\'s integrity. If the user doesn\'t like what they\'ve drawn or made a mistake, there is also an undo and clear canvas button. These buttons undo the last action or clear all drawings on the current layer the user has selected.'
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/BaseDorp/Canvas-Drawing-App',
        title: 'View on GitHub'
      },
      {
        type: 'external',
        url: '/docs/Canvas-Drawing-App/index.html',
        title: 'Try the App'
      }
    ]
  }
])

// Initialize current slides for each project
projects.value.forEach((project, index) => {
  currentSlides[index] = 0
})

// Toggle accordion open/closed (only one at a time)
const toggleProject = (index) => {
  if (openProject.value === index) {
    // If clicking the currently open project, close it
    openProject.value = null
  } else {
    // Open the clicked project (closes any previously open project)
    openProject.value = index
  }
}

// Slideshow controls
const nextSlide = (projectIndex) => {
  const project = projects.value[projectIndex]
  if (project.media && project.media.length > 1) {
    currentSlides[projectIndex] = (currentSlides[projectIndex] + 1) % project.media.length
  }
}

const previousSlide = (projectIndex) => {
  const project = projects.value[projectIndex]
  if (project.media && project.media.length > 1) {
    currentSlides[projectIndex] = currentSlides[projectIndex] === 0 
      ? project.media.length - 1 
      : currentSlides[projectIndex] - 1
  }
}

const goToSlide = (projectIndex, slideIndex) => {
  currentSlides[projectIndex] = slideIndex
}
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(55, 65, 81, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.7);
}
</style>