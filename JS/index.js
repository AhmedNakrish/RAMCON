 const projectsData = {
            qualita: [
                { 
                    id: 1, 
                    text: "مشروع تطوير منطقة سكنية حديثة بتقنيات متطورة ومواصفات عالمية معاصرة",
                    delay: 0.1,
                    title: "مشروع الرياض وقاسم هيليباد التطوير"
                },
                { 
                    id: 2, 
                    text: "بناء مجمع تجاري متكامل يضم متاجر ومطاعم ومرافق ترفيهية حديثة",
                    delay: 0.2,
                    title: "المجمع التجاري المتكامل"
                },
                { 
                    id: 3, 
                    text: "تطوير مشروع فندقي فاخر بإطلالة بحرية وخدمات متميزة للضيوف",
                    delay: 0.3,
                    title: "الفندق الفاخر بإطلالة بحرية"
                },
                { 
                    id: 4, 
                    text: "إنشاء مركز طبي متخصص بأحدث التقنيات والأجهزة الطبية المتقدمة",
                    delay: 0.4,
                    title: "المركز الطبي المتخصص"
                },
                { 
                    id: 5, 
                    text: "بناء مجمع إداري حديث للشركات والمؤسسات بمواصفات عالية الجودة",
                    delay: 0.5,
                    title: "المجمع الإداري الحديث"
                },
                { 
                    id: 6, 
                    text: "تطوير مشروع تعليمي شامل يضم مدارس ومعاهد بتصميم معماري مبتكر",
                    delay: 0.6,
                    title: "المشروع التعليمي الشامل"
                }
            ],
            now: [
                { 
                    id: 1, 
                    text: "مشروع البرج السكني الحديث قيد التنفيذ بنظام البناء الذكي المتطور",
                    delay: 0.1,
                    title: "البرج السكني الذكي"
                },
                { 
                    id: 2, 
                    text: "إنشاء مركز التسوق الجديد بتقنيات الاستدامة البيئية والطاقة المتجددة",
                    delay: 0.2,
                    title: "مركز التسوق المستدام"
                },
                { 
                    id: 3, 
                    text: "تطوير المنطقة الصناعية بمعايير السلامة العالمية والتقنيات الحديثة",
                    delay: 0.3,
                    title: "المنطقة الصناعية الحديثة"
                },
                { 
                    id: 4, 
                    text: "بناء المستشفى التخصصي الجديد بأحدث المعدات والتجهيزات الطبية",
                    delay: 0.4,
                    title: "المستشفى التخصصي"
                }
            ],
            future: [
                { 
                    id: 1, 
                    text: "مشروع المدينة الذكية المستقبلية بتقنيات الذكاء الاصطناعي والأتمتة",
                    delay: 0.1,
                    title: "المدينة الذكية المستقبلية"
                },
                { 
                    id: 2, 
                    text: "تطوير مجمع ترفيهي متكامل بمفهوم جديد للترفيه العائلي الحديث",
                    delay: 0.2,
                    title: "المجمع الترفيهي المتكامل"
                },
                { 
                    id: 3, 
                    text: "إنشاء مركز الأعمال الدولي بتصميم معماري فريد ومرافق متطورة",
                    delay: 0.3,
                    title: "مركز الأعمال الدولي"
                },
                { 
                    id: 4, 
                    text: "بناء الجامعة التقنية الحديثة بمعاهد متخصصة وتقنيات تعليمية متقدمة",
                    delay: 0.4,
                    title: "الجامعة التقنية الحديثة"
                },
                { 
                    id: 5, 
                    text: "تطوير المنتجع السياحي البيئي بمفهوم السياحة المستدامة والصديقة للبيئة",
                    delay: 0.5,
                    title: "المنتجع السياحي البيئي"
                }
            ],
            complete: [
                { 
                    id: 1, 
                    text: "مجمع الأبراج التجارية المكتمل بنجاح وتم تسليمه للعملاء بجودة عالية",
                    delay: 0.1,
                    title: "مجمع الأبراج التجارية"
                },
                { 
                    id: 2, 
                    text: "المدينة السكنية المتكاملة تم إنجازها بالكامل وتسليمها للسكان",
                    delay: 0.2,
                    title: "المدينة السكنية المتكاملة"
                },
                { 
                    id: 3, 
                    text: "مشروع الفندق الخمس نجوم مكتمل ويعمل بكامل طاقته الاستيعابية",
                    delay: 0.3,
                    title: "فندق الخمس نجوم"
                },
                { 
                    id: 4, 
                    text: "المجمع الطبي التخصصي مكتمل ويقدم خدمات طبية متميزة للمجتمع",
                    delay: 0.4,
                    title: "المجمع الطبي التخصصي"
                },
                { 
                    id: 5, 
                    text: "مشروع المركز الثقافي والفني مكتمل ويستضيف فعاليات ثقافية متنوعة",
                    delay: 0.5,
                    title: "المركز الثقافي والفني"
                },
                { 
                    id: 6, 
                    text: "المجمع التعليمي الحديث مكتمل ويضم آلاف الطلاب في بيئة تعليمية متطورة",
                    delay: 0.6,
                    title: "المجمع التعليمي الحديث"
                },
                { 
                    id: 7, 
                    text: "مشروع المارينا السياحية مكتمل ويوفر خدمات بحرية وترفيهية راقية",
                    delay: 0.7,
                    title: "مارينا سياحية راقية"
                }
            ]
        };

        // Carousel functionality
        let currentSlide = 0;
        const totalSlides = 6;

        function updateCarousel() {
            const track = document.getElementById('carouselTrack');
            const dots = document.querySelectorAll('.carousel-dot');
            
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateCarousel();
        }

        // Function to create a project card
        function createProjectCard(project) {
            return `
                <div class="project-card" style="animation-delay: ${project.delay}s;" data-project-id="${project.id}">
                    <div class="project-circle-container">
                        <div class="project-inner-circle switch">
                            <p>Read More</p>
                            <i class="fa-solid fa-arrow-up read-arrow"></i>
                        </div>
                        <div class="curved-text-container">
                            <svg width="200" height="200" style="overflow: visible;">
                                <defs>
                                    <path id="circle-path-${project.id}" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                                </defs>
                                <text class="curved-text">
                                    <textPath href="#circle-path-${project.id}" startOffset="0%">
                                        ${project.text}
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            `;
        }

        // Function to load projects for a specific category
        function loadProjects(category) {
            const projectsGrid = document.getElementById('projectsGrid');
            const projects = projectsData[category] || [];
            
            // Clear current projects
            projectsGrid.innerHTML = '';
            projectsGrid.setAttribute('data-category', category);
            
            // Add new projects
            projects.forEach(project => {
                projectsGrid.innerHTML += createProjectCard(project);
            });
            
            // Trigger animation
            setTimeout(() => {
                const projectCards = projectsGrid.querySelectorAll('.project-card');
                projectCards.forEach(card => {
                    card.classList.add('active');
                });
            }, 100);

            // Re-initialize modal functionality for new project cards
            initializeModalFunctionality();
        }

        // Function to open dialog
        function openDialog(projectData) {
            const dialogOverlay = document.getElementById('dialogOverlay');
            const dialogTitle = document.getElementById('dialogTitle');
            
            dialogTitle.textContent = projectData.title || projectData.text;
            dialogOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Function to close dialog
        function closeDialog() {
            const dialogOverlay = document.getElementById('dialogOverlay');
            dialogOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Function to initialize modal functionality
        function initializeModalFunctionality() {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('click', function() {
                    const projectId = this.getAttribute('data-project-id');
                    const category = document.getElementById('projectsGrid').getAttribute('data-category');
                    const projectData = projectsData[category].find(p => p.id == projectId);
                    
                    if (projectData) {
                        openDialog(projectData);
                    }
                });
            });
        }

        // Tab switching functionality and initialization
        document.addEventListener('DOMContentLoaded', function() {
            const tabItems = document.querySelectorAll('.tab-item');
            const closeBtn = document.getElementById('closeDialog');
            const nextBtn = document.getElementById('nextSlide');
            const prevBtn = document.getElementById('prevSlide');
            const carouselDots = document.querySelectorAll('.carousel-dot');
            
            // Load initial projects
            loadProjects('qualita');
            
            // Initialize modal functionality for initial load
            initializeModalFunctionality();
            
            // Tab switching
            tabItems.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    tabItems.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Get category and load projects
                    const category = this.getAttribute('data-category');
                    loadProjects(category);
                });
            });

            // Dialog controls
            closeBtn.addEventListener('click', closeDialog);
            
            // Carousel controls
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            carouselDots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(index));
            });

            // Close dialog when clicking overlay
            document.getElementById('dialogOverlay').addEventListener('click', function(e) {
                if (e.target === this) {
                    closeDialog();
                }
            });

            // Auto-play carousel
            setInterval(nextSlide, 4000);
        });

 
 
     
 
     
        const topSwiper = new Swiper('.high-side ', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: false,
            },
            navigation: {
                nextEl: '.high-side .swiper-button-next',
                prevEl: '.high-side .swiper-button-prev',
            },
            pagination: {
                el: '.high-side .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 60
                }
            },
            speed: 1000,
            effect: 'slide',
        });
        // Initialize bottom swiper (moves left)
        const bottomSwiper = new Swiper('.bottom-side  ', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                reverseDirection: true,
            },
            navigation: {
                nextEl: '.bottom-side .swiper-button-next',
                prevEl: '.bottom-side .swiper-button-prev',
            },
            pagination: {
                el: '.bottom-side .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 60
                }
            },
            speed: 1000,
            effect: 'slide',
        });

        // Pause autoplay on hover
        const swiperContainers = document.querySelectorAll('.swiper');
        swiperContainers.forEach((container, index) => {
            const swiper = index === 0 ? topSwiper : bottomSwiper;
            
            container.addEventListener('mouseenter', () => {
                swiper.autoplay.stop();
            });
            
            container.addEventListener('mouseleave', () => {
                swiper.autoplay.start();
            });
        });        