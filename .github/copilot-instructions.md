---
applyTo: "**"
---

# JavaScript/TypeScript Code Style Guide

## Naming Conventions
- Use PascalCase for component names, interfaces, and type aliases
- Use camelCase for variables, functions, and methods
- Prefix private class members with underscore (_)
- Use ALL_CAPS for constants

## Error Handling
- Use try/catch blocks for async operations
- Implement proper error boundaries in React components
- Always log errors with contextual information

## Code Conventions
- Always use semicolons at the end of statements
- Never use double quotes in the code, use double quotes only in JSX attributes
- Use single quotes for strings in JavaScript/TypeScript files, for imports and any other places in the code!!!
- Never use relative paths for imports local files, always use absolute paths with aliases (e.g., '@/components/Button')
- When creating a code, always use 4 spaces for indentation, never use tabs
- Always use trailing commas in multi-line objects and arrays
- When setting up colors, use HEX format for color values (e.g., #FFFFFF for white, #000000 for black); add an alpha channel for transparency if needed (e.g., #FFFFFF80 for white with 50% opacity).
- When creating database models/schemas, always use singular nouns for table names (e.g., User instead of Users) and camelCase for field names (e.g., firstName, lastName).