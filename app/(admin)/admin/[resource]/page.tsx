import { notFound } from "next/navigation"; import ResourceManager from "@/components/admin/ResourceManager"; import { resourceBySlug } from "@/lib/admin-resources";
import TestMailButton from "@/components/admin/TestMailButton";
export default function ResourcePage({params}:{params:{resource:string}}){const resource=resourceBySlug(params.resource);if(!resource)notFound();return <><ResourceManager resource={resource}/>{params.resource==="einstellungen"&&<TestMailButton/>}</>}
