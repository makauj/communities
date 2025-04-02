# Social Media App

A social media platform built with **Next.js**, featuring user authentication via **Lucia Auth** and **Google Auth**, and powered by **PostgreSQL** on **Vercel**. The app supports key features such as infinite scroll, direct messaging (DMs), posting, comments, bookmarks, and likes.

## Features

- **User Authentication:** Secure login with **Lucia Auth** and **Google Auth**.
- **Infinite Scroll:** Seamless browsing experience with infinite scroll for posts.
- **Direct Messaging (DMs):** Chat functionality for users to send private messages.
- **Post Creation:** Users can create posts, share content, and interact with others.
- **Comments:** Comment on posts to engage with content and users.
- **Bookmarks:** Save your favorite posts for easy access.
- **Likes:** Like posts and comments to show appreciation.

## Tech Stack

- **Frontend:** Next.js
- **Authentication:** Lucia Auth, Google Auth
- **Hosting/Database:** Vercel (for both hosting and PostgreSQL database)
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS

## Getting Started

To get started with this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/makauj/communities.git
cd communities
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of your project and add the necessary configuration keys:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your-google-client-secret
DATABASE_URL=your-postgresql-database-url
NEXTAUTH_SECRET=your-nextauth-secret
```

### 4. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to see the app in action.

## Deployment

This project is hosted on **Vercel**, with Vercel handling both the hosting and the PostgreSQL database.

To deploy the app to Vercel, push your code to a GitHub repository, and connect the repository to Vercel for automatic deployment.

## Roadmap

- [ ] Improve user profile management
- [ ] Add notifications for new DMs and interactions
- [ ] Enhance accessibility features
- [ ] Implement a search function for posts and users
- [ ] Add user authentication with additional providers (e.g., Facebook)

## Blog

For more details about the development and architecture of this project, check out the [project blog](https://makauwanyoike.medium.com/building-my-social-media-app-a-journey-of-challenges-learning-and-growth-2a8386e98883).

## Authors

See the [AUTHORS](./AUTHORS) file for a full list of contributors to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Connect

Feel free to reach out via LinkedIn for any questions or collaborations!

[Your LinkedIn Profile](https://www.linkedin.com/in/john-makau-684b4356/)
```




# Communities Next.js 15 Social Media App

A full-stack social media app with infinite loading, optimistic updates, authentication, DMs, notifications, file uploads, and much more.

Watch the free tutorial on YouTube: https://www.youtube.com/watch?v=TyV12oBDsYI

![thumbnail 7](https://github.com/user-attachments/assets/686b37e4-3d16-4bc4-a7f2-9d152c3addf5)
