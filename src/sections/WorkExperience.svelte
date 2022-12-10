<script>
    import Carousel from 'svelte-carousel';
    import WorkExperienceElement from '../components/WorkExperienceElement.svelte';
</script>

<section class="flex flex-col min-h-screen py-4 sm:p-8 items-center">
    <h2 class="mb-4">Work experience</h2>
    <div class="flex w-[95%] lg:w-[75%] lg:max-w-[900px]">
        <Carousel autoplay={false} pauseOnFocus autoplayProgressVisible>
            <WorkExperienceElement
                name="Cargo Viszed Kft."
                interval="2021.05. - 2023.01."
                role="Fullstack Developer | Scrum Master"
                type="Contract"
                image={{ src: 'logos/viddl.jpg', alt: 'viddl' }}
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
                interval="2021.05. - 2023.01."
                role="Fullstack Developer"
                type="Contract"
                image={{ src: 'tech-images/nestjs.png', alt: 'alt' }}
            >
                <p>adawdwa</p>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="Bar Of Legends"
                interval="2021"
                role="Mobile Developer"
                type="Project"
                image={{ src: 'tech-images/nestjs.png', alt: 'alt' }}
            >
                <p>adawdwa</p>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="Dreamjo.bs Zrt."
                interval="2021.07."
                role="Quizz Editor"
                type="Project"
                image={{ src: 'tech-images/nestjs.png', alt: 'alt' }}
            >
                <p>adawdwa</p>
            </WorkExperienceElement>
            <WorkExperienceElement
                name="DirectTwo Kft."
                interval="2020.01. - 2021.04."
                role="Junior Software Engineer"
                type="Fulltime"
                image={{ src: 'tech-images/nestjs.png', alt: 'alt' }}
            >
                <p>adawdwa</p>
            </WorkExperienceElement>
        </Carousel>
    </div>
</section>

<style>
</style>
