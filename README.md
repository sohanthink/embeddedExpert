# Project Description

This Next.js project features two main forms and a subscription form. It utilizes MySQL as the database and Sequelize as the ORM. The project includes a server that can be run using Node.js and provides commands to generate tables in the database. The goal is to streamline form handling and database operations, ensuring data consistency across different environments.

Server running command:

- `npm run dev`

To generate the tables in the database, run:

- `node lib/syncDatabase.js`

Local database infos

DB_HOST = localhost
DB_USER = root
DB_PASS =
DB_NAME = embeddedexpert

server log check
cat ~/test.embeddedexpert.io/stderr.log

## supabase table creation sql

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Company Information Table
CREATE TABLE company_info (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
name TEXT NOT NULL,
about TEXT,
services TEXT[],
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Affiliate Program Table
CREATE TABLE affiliate_programs (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
reason TEXT NOT NULL,
details TEXT NOT NULL,
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. FAQ Table
CREATE TABLE faqs (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
question TEXT NOT NULL,
answer TEXT NOT NULL,
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW(),
last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Resources Table
CREATE TABLE resources (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
title TEXT NOT NULL,
description TEXT,
preview_link TEXT,
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Reviews Table
CREATE TABLE reviews (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
review TEXT NOT NULL,
course_name TEXT,
reviewer_name TEXT,
reviewer_role TEXT,
country TEXT,
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Testimonials Table
CREATE TABLE testimonials (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
quote TEXT NOT NULL,
reviewer_name TEXT,
reviewer_role TEXT,
country TEXT,
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Courses Summary Table
CREATE TABLE courses_summary (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
total_courses INTEGER,
categories JSONB,
tags TEXT[],
metadata JSONB,
last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Courses Table
CREATE TABLE courses (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
title TEXT NOT NULL,
description TEXT,
category TEXT,
lessons INTEGER,
duration_minutes INTEGER,
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW(),
updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Instructors Table
CREATE TABLE instructors (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
name TEXT NOT NULL,
bio TEXT,
degrees TEXT[],
achievements TEXT[],
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Technologies Table
CREATE TABLE technologies (
id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
technology_list TEXT[],
tags TEXT[],
metadata JSONB,
created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_tags ON courses USING GIN(tags);
CREATE INDEX idx_faqs_tags ON faqs USING GIN(tags);
CREATE INDEX idx_resources_tags ON resources USING GIN(tags);
