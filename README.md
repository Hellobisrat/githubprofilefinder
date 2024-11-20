# githubprofilefinder


# in index.js component the following activities takes place

# State Management:

userName: Tracks the username input.

errorMessage: Manages error messages.

userData: Stores the fetched user data.

loading: Indicates whether data is being fetched.

# Fetch Function:

fetchGithubUserData: Fetches GitHub user data, handles loading and error states, and updates userData.

Resets errorMessage on new fetch to ensure accurate error handling.

# Handle Submit:

Triggers the fetch function on button click.

# Rendering:

Displays loading text while fetching data.

Shows error messages if any.

Renders user data if fetched successfully.


# in user component 

Destructuring Props: Extracts necessary properties from the user object.

Date Formatting: Converts the created_at date to a readable format.

Rendering User Data:

Displays the avatar, username, join date, public repositories, followers, and following counts.

# for the expression `User joined on ${createdDate.getDate()} ${createdDate.toLocaleDateString('en-us', { month: 'short' })} ${createdDate.getFullYear()}`

${createdDate.getDate()}: Gets the day of the month.

${createdDate.toLocaleDateString('en-us', { month: 'short' })}: Gets the abbreviated month.

${createdDate.getFullYear()}: Gets the full year.

Example:
For a created_at date of 2023-11-20T10:29:00Z:

Day: 20

Month: "Nov" (abbreviated)

Year: 2023


# bisrat Nov 11 2024