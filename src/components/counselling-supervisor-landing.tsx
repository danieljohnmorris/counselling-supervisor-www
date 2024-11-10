// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Check, Brain, ArrowRight } from "lucide-react"

// export function CounsellingSupervisorLanding() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <Brain className="h-6 w-6 text-primary" />
//           <span className="ml-2 text-lg font-bold">counselling-supervisor.ai</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4 flex items-center" href="#features">
//             Features
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4 flex items-center" href="#pricing">
//             Pricing
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4 flex items-center" href="#about">
//             About
//           </Link>
//           <Button asChild className="ml-4">
//             <Link href="#" className="font-medium">
//               Get Started
//             </Link>
//           </Button>
//         </nav>
//       </header>
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
//                   The World's First AI Counselling Supervisor
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
//                   Enhance your counselling practice with 24/7 AI-powered supervision, insights, and support.
//                 </p>
//               </div>
//               <div className="space-y-4 sm:space-y-0 sm:space-x-4">
//                 <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
//                   Get Started <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//                 <Button size="lg" variant="outline">
//                   Learn More
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section id="features" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
//               Key Features
//             </h2>
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>24/7 Availability</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Access supervision anytime, anywhere. Our AI never sleeps, ensuring you always have support.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Personalized Insights</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Receive tailored feedback and suggestions based on your unique counselling style and cases.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Ethical Guidance</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Navigate complex ethical dilemmas with AI-powered analysis based on established counselling standards.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Case Analysis</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Upload case notes for in-depth analysis, identifying patterns and suggesting intervention strategies.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Continuous Learning</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Stay updated with the latest counselling techniques and research, curated by our AI.</p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Performance Tracking</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p>Monitor your progress and growth as a counsellor with detailed analytics and reports.</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
//               Simple, Transparent Pricing
//             </h2>
//             <div className="max-w-2xl mx-auto">
//               <Card className="w-full">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Professional Plan</CardTitle>
//                   <CardDescription>Everything you need for AI-powered counselling supervision</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-center mb-4">
//                     <span className="text-4xl font-bold">$99</span>
//                     <span className="text-gray-500 dark:text-gray-400">/month</span>
//                   </div>
//                   <ul className="space-y-2">
//                     <li className="flex items-center">
//                       <Check className="mr-2 h-4 w-4 text-green-500" />
//                       Advanced AI supervision
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="mr-2 h-4 w-4 text-green-500" />
//                       Unlimited case analyses
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="mr-2 h-4 w-4 text-green-500" />
//                       Daily performance insights
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="mr-2 h-4 w-4 text-green-500" />
//                       Ethical dilemma solver
//                     </li>
//                     <li className="flex items-center">
//                       <Check className="mr-2 h-4 w-4 text-green-500" />
//                       24/7 AI support
//                     </li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button className="w-full">Start 14-Day Free Trial</Button>
//                 </CardFooter>
//               </Card>
//             </div>
//           </div>
//         </section>
//         <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
//                   Elevate Your Counselling Practice
//                 </h2>
//                 <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
//                   Join the future of counselling supervision. Start your free trial today and experience the power of AI-assisted growth.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <form className="flex space-x-2">
//                   <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
//                   <Button type="submit">Start Free Trial</Button>
//                 </form>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   By signing up, you agree to our{" "}
//                   <Link className="underline underline-offset-2" href="#">
//                     Terms & Conditions
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500 dark:text-gray-400">
//           © 2024 counselling-supervisor.ai. All rights reserved.
//         </p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy Policy
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Cookie Policy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }