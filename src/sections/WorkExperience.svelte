<script>
    import Carousel from 'svelte-carousel';
    import WorkExperienceElement from '../components/WorkExperienceElement.svelte';
    import { Techs } from '../constants/Techs';
    import viewport from '../utils/useViewportAction';

    let autoplay = false;
</script>

<section class="flex flex-col min-h-screen py-4 sm:p-8 items-center">
    <h2 class="mb-4">Work experience</h2>
    <div
        use:viewport
        on:enterViewport={() => {
            autoplay = true;
        }}
        on:exitViewport={() => {
            autoplay = false;
        }}
        class="flex w-[95%] lg:w-[75%] lg:max-w-[900px]"
    >
        <Carousel {autoplay} pauseOnFocus autoplayProgressVisible autoplayDuration={6000}>
            <WorkExperienceElement
                name="Cargo Viszed Kft."
                interval="2021.05. - 2023.02."
                role="Fullstack Developer | Scrum Master"
                type="Contract"
                image={{ src: 'logos/viddl.jpg', alt: 'viddl' }}
                techs={[
                    Techs.JAVASCRIPT,
                    Techs.TYPESCRIPT,
                    Techs.REACT,
                    Techs.RA,
                    Techs.EXPO,
                    Techs.REACTNATIVE,
                    Techs.REDUX,
                    Techs.MONGODB,
                    Techs.NESTJS,
                    Techs.MUI,
                    Techs.GATSBY,
                    Techs.NEXTJS,
                    Techs.NX,
                    Techs.NOTION,
                ]}
            >
                <div class="flex flex-col gap-y-3">
                    <p>
                        ViddL is a last mile delivery system in Hungary. With some other contractors, I participated in planning the IT
                        architecture, developing, testing and delivering new features and fixing bug reports.
                    </p>
                    <p>
                        During this time, I worked on all part of the system which included developing 2 mobile apps written in React
                        Native, Expo, 3 backend made in NestJS and 2 frontend apps made in React.
                    </p>
                    <p>
                        My main responsibilities were delivering high quality clean code, maintaining mongoose schema and reviewing other
                        developers code.
                    </p>
                    <p>
                        In 2022 summer, we decided to rewrite some parts of the system. My part was decisive, since I brought in the nrwl Nx
                        monorepo system and I was entrusted to set it up.
                    </p>
                    <p>
                        Occasionally, I was the one to optimize our CI/CD flow, I wrote several GitHub workflows, auto lint, auto expo
                        publish, etc.
                    </p>
                    <p>
                        The greatest challenges I faced was GPE and Ingenico POS terminal integration to the mobile. To solve this problem,
                        I had to be able to integrate native Kotlin code to React Native and Expo.
                    </p>
                    <div class="divider my-3" />
                    <p>
                        The contractor found that I am a very organized person and I get along with other developers easily, understand
                        business and individual needs on a professional level. I was given the title of Scrum Master, and ensured the flow
                        of the sprints.
                    </p>
                    <p>
                        My responsibilities included organizing retrospectives, demos, sprint plannings, daily standups, delegating tasks to
                        other developers in the right order and improving the project management tool, Notion.
                    </p>
                </div>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="Cogito Technologies Kft."
                interval="2021.05. - 2023.02."
                role="Fullstack Developer"
                type="Contract"
                image={{ src: 'logos/hsup.png', alt: 'hsup' }}
                techs={[
                    Techs.JAVASCRIPT,
                    Techs.TYPESCRIPT,
                    Techs.REACT,
                    Techs.EXPO,
                    Techs.REACTNATIVE,
                    Techs.REDUX,
                    Techs.MONGODB,
                    Techs.POSTGRES,
                    Techs.NESTJS,
                    Techs.MUI,
                    Techs.TAILWIND,
                ]}
            >
                <div class="flex flex-col gap-y-3">
                    <p>
                        HSUP is one of the first university courses that you can take completely online. As a fullstack developer I worked
                        along with a small developer team.
                    </p>
                    <p>
                        I took a great part in developing this e-learning system, where students can learn about startups, take exams, read
                        the site news, apply for projects and follow their progress on a dashboard. HSUP contains 3 apps, a landing page for
                        introduction (Gatsby, React), a webapp (React, Redux, MUI) and a mobile app for learning (Expo, React Native, Redux,
                        Push Notifications). We implemented the business logic on a backend (NestJS, MongoDB).
                    </p>
                    <p>The challenges I faced included JWT authentication, push notifications, caching and state management</p>
                    <p>The project turned out to be a great success and we are currently in the maintenance phase.</p>
                    <div class="divider my-3" />
                    <p>
                        The contractor thought that I get along well with already existing roboust systems, so I was given the
                        responsibility of maintaining one of their other webapp, segitseg.ma. (Gatsby, PostgreSQL)
                    </p>
                </div>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="Bar Of Legends"
                interval="2021"
                role="Mobile Developer"
                type="Project"
                image={{ src: 'logos/bol.png', alt: 'bol' }}
                techs={[Techs.FLUTTER, Techs.DART, Techs.FIREBASE, Techs.GETX, Techs.NX, Techs.RA, Techs.NESTJS]}
            >
                <div class="flex flex-col gap-y-3">
                    <p>
                        As a freelancer, I helped them visualize, plan and build a mobile application that best met their expectations. They
                        imagined promoting their bar with an app capable of showing their current menu and board games. Since the brand of
                        the bar is based on gaming, we came up with WoW like achievement system.
                    </p>
                    <p>
                        After registration, the users are shown a list of achievements grouped in categories. Each achievement has an unique
                        QR code, which can be read by the bartender. Completing one results in gaining points and climbing the leaderboard.
                    </p>
                    <p>
                        The app is a <strong>serverless Flutter application</strong> with <strong>Firebase Services</strong> including Authentication,
                        Cloud Firestore, Cloud Messaging (Push messages). State management and routing is provided by GetX. The app is release
                        both in Play Store and App Store.
                    </p>
                    <p>The project is currently in maintenance stage.</p>
                </div>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="Dreamjo.bs Zrt."
                interval="2021.07."
                role="Quizz Editor"
                type="Project"
                image={{ src: 'logos/dreamjobs.jpg', alt: 'dreamjobs' }}
                techs={[Techs.FLUTTER, Techs.DART]}
            >
                <div class="flex flex-col gap-y-3">
                    <p>
                        I took full responsibility of building a Flutter quizz as a question/answer writer. I paid extra attention on the
                        level of the questions so that everyone could both enjoy and test their skills.
                    </p>
                    <p>The quiz can be found <a href="https://devchallenge.hu/en/tests-list" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="DirectTwo Kft."
                interval="2020.01. - 2021.04."
                role="Junior Software Engineer"
                type="Fulltime"
                image={{ src: 'logos/d2.png', alt: 'd2' }}
                techs={[Techs.FLUTTER, Techs.JAVASCRIPT, Techs.HTML, Techs.GRAFANA, Techs.POSTGRES]}
            >
                <div class="flex flex-col gap-y-3">
                    <p>
                        I worked on designing and developing a web UI for remotely control of smart meters. I used Javascript and Redis to
                        achieve this.
                    </p>
                    <p>
                        My main responsibility in the company was building a mobile application with Flutter for a complex face recognition
                        system. I built an authentication which registers the user based on then face, then allows a door to open when the
                        right person stands in front of it.
                    </p>
                </div>
            </WorkExperienceElement>
        </Carousel>
    </div>
</section>

<style>
    a {
        color: #ff3e00;
    }
</style>
