export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  readingTime: number;
  tags?: string[];
}

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Professional Cleaning Services for Your Home",
    slug: "professional-cleaning-services",
    excerpt:
      "Learn about the benefits of professional cleaning services for maintaining a healthy home environment.",
    content: `Professional cleaning services offer numerous benefits for homeowners who want to maintain a clean and healthy living environment without spending their valuable time on household chores.

    Professional cleaners are trained to clean efficiently and effectively, using specialized tools and products that can remove even the most stubborn dirt and grime. They know how to clean different surfaces without causing damage and can reach areas that are often overlooked during regular cleaning.

    Regular professional cleaning can also help to improve indoor air quality by removing dust, allergens, and other pollutants that can cause respiratory problems. This is especially important for households with members who suffer from allergies or asthma.

    Moreover, professional cleaners can help to extend the life of your furniture, carpets, and other household items by keeping them properly maintained. This can save you money in the long run by reducing the need for replacements.

    Finally, hiring professional cleaners can give you more time to focus on the things that matter most to you, whether that's spending time with family, pursuing hobbies, or simply relaxing after a long day at work.`,
    coverImage: "",
    date: "2023-05-15",
    readingTime: 5,
    tags: ["Cleaning", "Home Maintenance", "Professional Services"],
  },
  {
    id: "2",
    title: "Essential Tools Every Professional Cleaner Uses",
    slug: "essential-cleaning-tools",
    excerpt:
      "Discover the must-have tools and equipment that professional cleaners rely on for efficient cleaning.",
    content: `Professional cleaners rely on a variety of specialized tools and equipment to deliver high-quality cleaning results efficiently. Understanding these essential tools can help you improve your own cleaning routine or make informed decisions when hiring cleaning services.

    One of the most important tools in a professional cleaner's arsenal is a high-quality vacuum cleaner with various attachments for different surfaces. Professional-grade vacuums typically have stronger suction power and better filtration systems than consumer models, allowing for more effective removal of dust and allergens.

    Microfiber cloths are another essential tool, as they are highly effective at trapping dust and dirt without scratching surfaces. Unlike traditional cotton cloths, microfiber can hold up to six times its weight in water and can clean effectively with minimal or no cleaning products.

    Professional cleaners also use specialized cleaning solutions for different surfaces and types of dirt. These may include degreasers for kitchen surfaces, glass cleaners for windows and mirrors, and disinfectants for bathrooms and high-touch areas.

    Extendable dusters, scrub brushes, and steam cleaners are also commonly used by professional cleaners to reach high areas, remove stubborn stains, and sanitize surfaces without harsh chemicals.

    By investing in quality cleaning tools and learning proper techniques, you can achieve professional-level cleanliness in your own home or business.`,
    coverImage: "",
    date: "2023-06-22",
    readingTime: 6,
    tags: ["Cleaning Tools", "Equipment", "Professional Cleaning"],
  },
  {
    id: "3",
    title: "How to Deep Clean Your Kitchen Like a Pro",
    slug: "deep-clean-kitchen",
    excerpt:
      "Step-by-step guide to deep cleaning your kitchen using professional techniques and tips.",
    content: `Deep cleaning your kitchen is essential for maintaining a healthy and hygienic cooking environment. Professional cleaners follow a systematic approach to ensure no area is overlooked, and you can apply these same techniques in your own home.

    Start by decluttering countertops and removing all items from cabinets and drawers. This allows you to clean both the items and the surfaces they sit on. Wipe down all containers and only return items that are still useful and in good condition.

    Next, tackle your appliances. For the refrigerator, remove all food items, discard anything expired, and clean all shelves and drawers with a solution of warm water and mild dish soap. For the oven, use a specialized oven cleaner for the interior and a degreaser for the stovetop and hood.

    Don't forget often-overlooked areas like the tops of cabinets, the inside of the trash can, and the seal around your dishwasher door. These areas can harbor bacteria and mold if not regularly cleaned.

    For sinks and faucets, use a mixture of baking soda and vinegar to remove stains and buildup, followed by a disinfectant to kill germs. Clean drains by pouring boiling water down them, followed by a mixture of baking soda and vinegar.

    Finally, clean the floors thoroughly, making sure to move appliances if possible to clean underneath them. A steam mop can be particularly effective for sanitizing kitchen floors without harsh chemicals.

    By following these professional techniques, you can achieve a deep clean that not only makes your kitchen look great but also creates a healthier environment for food preparation.`,
    coverImage: "",
    date: "2023-07-10",
    readingTime: 8,
    tags: ["Kitchen Cleaning", "Deep Cleaning", "Cleaning Tips"],
  },
  {
    id: "4",
    title: "The Benefits of Hiring a Regular Cleaning Service",
    slug: "benefits-regular-cleaning-service",
    excerpt:
      "Explore how a regular cleaning service can improve your quality of life and home environment.",
    content: `Hiring a regular cleaning service offers numerous benefits that extend beyond just having a clean home. From saving time to improving your mental wellbeing, professional cleaning services can significantly enhance your quality of life.

    One of the most obvious benefits is the time saved. The average person spends several hours each week cleaning their home. By outsourcing this task to professionals, you can reclaim this time for activities you enjoy or that add value to your life, such as spending time with family, pursuing hobbies, or advancing your career.

    Regular professional cleaning also ensures a consistently clean environment. Professional cleaners follow detailed checklists to ensure no area is overlooked, and they clean on a regular schedule, preventing the buildup of dirt and grime that can occur when cleaning is postponed due to busy schedules.

    There are also health benefits to consider. Professional cleaners use techniques and products that effectively remove allergens, bacteria, and viruses from your home, potentially reducing illnesses and alleviating symptoms for those with allergies or respiratory conditions.

    Many people also report reduced stress and improved mental wellbeing when they don't have to worry about cleaning. Coming home to a clean, organized space can help reduce anxiety and create a more peaceful living environment.

    Finally, regular professional cleaning can help protect your investment in your home by properly maintaining surfaces, fixtures, and furnishings, potentially extending their lifespan and preserving their appearance.

    While there is a cost associated with hiring cleaning services, many people find that the benefits in terms of time saved, reduced stress, and improved home environment make it a worthwhile investment.`,
    coverImage: "",
    date: "2023-08-05",
    readingTime: 7,
    tags: ["Cleaning Service", "Home Maintenance", "Time Management"],
  },
  {
    id: "4",
    title: "Red the Benefits of Hiring a Regular Cleaning Service",
    slug: "benefits-regular-cleaning-service",
    excerpt:
      "Explore how a regular cleaning service can improve your quality of life and home environment.",
    content: `Hiring a regular cleaning service offers numerous benefits that extend beyond just having a clean home. From saving time to improving your mental wellbeing, professional cleaning services can significantly enhance your quality of life.

    One of the most obvious benefits is the time saved. The average person spends several hours each week cleaning their home. By outsourcing this task to professionals, you can reclaim this time for activities you enjoy or that add value to your life, such as spending time with family, pursuing hobbies, or advancing your career.

    Regular professional cleaning also ensures a consistently clean environment. Professional cleaners follow detailed checklists to ensure no area is overlooked, and they clean on a regular schedule, preventing the buildup of dirt and grime that can occur when cleaning is postponed due to busy schedules.

    There are also health benefits to consider. Professional cleaners use techniques and products that effectively remove allergens, bacteria, and viruses from your home, potentially reducing illnesses and alleviating symptoms for those with allergies or respiratory conditions.

    Many people also report reduced stress and improved mental wellbeing when they don't have to worry about cleaning. Coming home to a clean, organized space can help reduce anxiety and create a more peaceful living environment.

    Finally, regular professional cleaning can help protect your investment in your home by properly maintaining surfaces, fixtures, and furnishings, potentially extending their lifespan and preserving their appearance.

    While there is a cost associated with hiring cleaning services, many people find that the benefits in terms of time saved, reduced stress, and improved home environment make it a worthwhile investment.`,
    coverImage: "",
    date: "2023-08-05",
    readingTime: 7,
    tags: ["Cleaning Service", "Home Maintenance", "Time Management"],
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real application, this would fetch from an API or database
  return blogPosts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  // In a real application, this would fetch from an API or database
  return blogPosts.find((post) => post.slug === slug);
}
