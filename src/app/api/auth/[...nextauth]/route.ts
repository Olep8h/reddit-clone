import NextAuth from "next-auth";
import {authOptions} from "@/lib/auth";


const heandler = NextAuth(authOptions);

export { heandler as GET, heandler as POST }
