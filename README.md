# Afghan Proverbs & Sayings API

A RESTful API to manage traditional Afghan proverbs and sayings in Dari, Pashto, and English. This API allows full CRUD operations and supports filtering by category.

## Features

- Get all proverbs
- Get a single proverb by ID
- Add a new proverb
- Update an existing proverb
- Delete a proverb
- Filter proverbs by category (e.g., wisdom, advice)

## Technologies Used

- Node.js
- Express
- JSON file for data storage

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

```bash
git clone https://github.com/your-username/afghan-proverbs-api.git
cd afghan-proverbs-api
npm install
```



## Frontend Application

This project also includes a frontend built with **EJS** (Embedded JavaScript Templates) and styled with **Bootstrap**. The frontend allows users to:

- View all proverbs in a styled list
- View full details of a single proverb
- Add new proverbs via form
- Edit existing proverbs
- Delete proverbs with confirmation
- Search proverbs by keyword
- Filter proverbs by category *(if supported)*
- View a random proverb *(if supported)*

To run the frontend, make sure the API is running, then start the frontend server:

```bash
npm start


## Live Demo

Check out the live version of this project:
[https://your-live-demo-link.com](https://your-live-demo-link.com)


## Bonus Features Implemented

- [x] Search proverbs by keyword
- [ ] Filter by category *(optional)*
- [ ] Random proverb display *(optional)*
- [ ] Multiple categories per proverb *(optional)*


## Project Structure

afghan-proverbs-api/
├── controllers/
│ ├── postController.js/
├── public/
│ ├── css/
│ ├── js/
├── views/
│ ├── index.ejs
│ ├── show.ejs
│ ├── edit.ejs
│ └── new.ejs
├── routes/
│ └── postRoutes.js
├── data/
│ └── proverbs.json
├── app.js
├── README.md
└── package.json


