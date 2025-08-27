const projectsData = {
            qualita: [
                { 
                    id: 1, 
                    text: "مشروع تطوير منطقة سكنية حديثة بتقنيات متطورة ومواصفات عالمية معاصرة",
                    delay: 0.1 
                },
                { 
                    id: 2, 
                    text: "بناء مجمع تجاري متكامل يضم متاجر ومطاعم ومرافق ترفيهية حديثة",
                    delay: 0.2 
                },
                { 
                    id: 3, 
                    text: "تطوير مشروع فندقي فاخر بإطلالة بحرية وخدمات متميزة للضيوف",
                    delay: 0.3 
                },
                { 
                    id: 4, 
                    text: "إنشاء مركز طبي متخصص بأحدث التقنيات والأجهزة الطبية المتقدمة",
                    delay: 0.4 
                },
                { 
                    id: 5, 
                    text: "بناء مجمع إداري حديث للشركات والمؤسسات بمواصفات عالية الجودة",
                    delay: 0.5 
                },
                { 
                    id: 6, 
                    text: "تطوير مشروع تعليمي شامل يضم مدارس ومعاهد بتصميم معماري مبتكر",
                    delay: 0.6 
                }
            ],
            now: [
                { 
                    id: 1, 
                    text: "مشروع البرج السكني الحديث قيد التنفيذ بنظام البناء الذكي المتطور",
                    delay: 0.1 
                },
                { 
                    id: 2, 
                    text: "إنشاء مركز التسوق الجديد بتقنيات الاستدامة البيئية والطاقة المتجددة",
                    delay: 0.2 
                },
                { 
                    id: 3, 
                    text: "تطوير المنطقة الصناعية بمعايير السلامة العالمية والتقنيات الحديثة",
                    delay: 0.3 
                },
                { 
                    id: 4, 
                    text: "بناء المستشفى التخصصي الجديد بأحدث المعدات والتجهيزات الطبية",
                    delay: 0.4 
                }
            ],
            future: [
                { 
                    id: 1, 
                    text: "مشروع المدينة الذكية المستقبلية بتقنيات الذكاء الاصطناعي والأتمتة",
                    delay: 0.1 
                },
                { 
                    id: 2, 
                    text: "تطوير مجمع ترفيهي متكامل بمفهوم جديد للترفيه العائلي الحديث",
                    delay: 0.2 
                },
                { 
                    id: 3, 
                    text: "إنشاء مركز الأعمال الدولي بتصميم معماري فريد ومرافق متطورة",
                    delay: 0.3 
                },
                { 
                    id: 4, 
                    text: "بناء الجامعة التقنية الحديثة بمعاهد متخصصة وتقنيات تعليمية متقدمة",
                    delay: 0.4 
                },
                { 
                    id: 5, 
                    text: "تطوير المنتجع السياحي البيئي بمفهوم السياحة المستدامة والصديقة للبيئة",
                    delay: 0.5 
                }
            ],
            complete: [
                { 
                    id: 1, 
                    text: "مجمع الأبراج التجارية المكتمل بنجاح وتم تسليمه للعملاء بجودة عالية",
                    delay: 0.1 
                },
                { 
                    id: 2, 
                    text: "المدينة السكنية المتكاملة تم إنجازها بالكامل وتسليمها للسكان",
                    delay: 0.2 
                },
                { 
                    id: 3, 
                    text: "مشروع الفندق الخمس نجوم مكتمل ويعمل بكامل طاقته الاستيعابية",
                    delay: 0.3 
                },
                { 
                    id: 4, 
                    text: "المجمع الطبي التخصصي مكتمل ويقدم خدمات طبية متميزة للمجتمع",
                    delay: 0.4 
                },
                { 
                    id: 5, 
                    text: "مشروع المركز الثقافي والفني مكتمل ويستضيف فعاليات ثقافية متنوعة",
                    delay: 0.5 
                },
                { 
                    id: 6, 
                    text: "المجمع التعليمي الحديث مكتمل ويضم آلاف الطلاب في بيئة تعليمية متطورة",
                    delay: 0.6 
                },
                { 
                    id: 7, 
                    text: "مشروع المارينا السياحية مكتمل ويوفر خدمات بحرية وترفيهية راقية",
                    delay: 0.7 
                }
            ]
        };

        // Function to create a project card
        function createProjectCard(project) {
            return `
                <div class="project-card" style="animation-delay: ${project.delay}s;">
                    <div class="project-circle-container">
                        <div class="project-outer-circles"></div>
                        <div class="project-inner-circle">
                            Read More
                        </div>
                        <div class="curved-text-container">
                            <svg width="360" height="360" style="overflow: visible;">
                                <defs>
                                    <path id="circle-path-${project.id}" d="M 180,180 m -140,0 a 140,140 0 1,1 280,0 a 140,140 0 1,1 -280,0" />
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
        }

        // Tab switching functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabItems = document.querySelectorAll('.tab-item');
            
            // Load initial projects
            loadProjects('qualita');
            
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
        });