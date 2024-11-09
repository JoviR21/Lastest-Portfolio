"use client"

import { useEffect, useState } from "react";
import { createClient, Entry } from "contentful";
import { TypeProjectSkeleton } from "@/src/contentful/types";

import Image from "next/image";
import Link from "next/link";

import { FaUpRightFromSquare } from "react-icons/fa6";

export default function FeaturedProjects() {

    const [collection, setCollection] = useState<
        Entry<TypeProjectSkeleton>[]
    >([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
                });
                const response = await client.getEntries<TypeProjectSkeleton>({
                    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PROJECT as "project",
                    limit: 2
                });

                setCollection(response.items)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    return (
        <section className="feature-project">
            <div className="container px-6 py-10 mx-auto">
                <div className="lg:flex">
                    <h2 className="text-2xl text-center lg:text-start font-regular font-secondary text-white capitalize lg:text-3xl">Projects</h2>
                    <Link href="/projects" className="hidden lg:flex text-lg lg:text-end font-medium font-secondary text-white capitalize hover:text-accent transition-transform ease-in-out ms-auto my-auto">Other Project<FaUpRightFromSquare className="my-auto ms-2" /></Link>
                </div>
                <h1 className="text-4xl text-center lg:text-start font-semibold font-secondary mt-2 text-white">
                    Recents Projects
                </h1>
                <Link href="/projects" className="flex lg:hidden justify-center text-center text-lg lg:text-end font-medium font-secondary text-white capitalize hover:text-accent transition-transform ease-in-out mt-4">Other Project<FaUpRightFromSquare className="my-auto ms-2" /></Link>

                <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    {collection.map(item => {
                        const thumbnail = item.fields.thumbnail as {
                            fields: {
                                file: {
                                    url: string;
                                    details: { image: { width: number; height: number } }
                                };
                            };
                        };

                        return <div className="border-stand border-2 rounded-xl transition-all ease-linear hover:border-accent hover:shadow-[0px_0px_4px_6px_#1d566d] p-3 h-full" key={item.sys.id}>
                            <Image
                                src={`https:${thumbnail.fields.file.url}`}
                                width={800}
                                height={800}
                                className="w-full object-cover rounded-lg h-96"
                                alt={item.fields.projectName as string}
                                loading="lazy"
                            />
                            <Link href={`/projects/${item.fields.slug}`} className="text-2xl tracking-wider font-primary text-white font-semibold">{item.fields.projectName as string}</Link>
                            <p className="mt-2 mb-auto text-lg text-white font-primary">{item.fields.projectDescription as string}</p>
                            <div className="techstack flex flex-wrap mt-6 gap-2">
                                {Array.isArray(item.fields.techStack) &&
                                    item.fields.techStack.map(
                                        (tech: string, index: number) => (
                                            <div key={index} className="badge badge-lg badge-outline font-secondary font-semibold">
                                                {tech}
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <div className="border-b-4 rounded-sm border-accent mt-3"></div>
                            <Link href={`/projects/${item.fields.slug}`} className="flex justify-center mt-5 mb-2 border-2 border-accent rounded-lg w-full py-1 font-secondary font-medium text-white hover:bg-accent hover:-translate-y-1 transition-all ease-in-out">Project Details</Link>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}