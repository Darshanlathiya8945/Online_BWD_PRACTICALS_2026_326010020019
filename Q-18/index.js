
const subjects = [
    {
        name: "HTML",
        description: "HTML is used to create the structure and content of web pages. It uses elements such as headings, paragraphs, images, links, and forms."
    },
    {
        name: "CSS",
        description: "CSS is used to style web pages. It controls colors, fonts, layouts, spacing, borders, and responsive designs."
    },
    {
        name: "JavaScript",
        description: "JavaScript is a programming language used to make websites interactive. It can respond to user actions and change webpage content dynamically."
    },
    {
        name: "Python",
        description: "Python is a popular programming language known for its simple syntax. It is commonly used for web development, automation, data science, and artificial intelligence."
    },
    {
        name: "Database",
        description: "Database systems are used to store, organize, and retrieve data. Common database concepts include tables, records, queries, and relationships."
    }
];

const subjectList = document.getElementById("subjectList");
const subjectTitle = document.getElementById("subjectTitle");
const subjectDescription = document.getElementById("subjectDescription");

function displaySubjects() {
    subjects.forEach(function(subject, index) {
        const listItem = document.createElement("li");

        listItem.textContent = subject.name;

        listItem.addEventListener("click", function() {
            displaySubject(index);
        });

        subjectList.appendChild(listItem);
    });
}

function displaySubject(index) {
    const subject = subjects[index];

    subjectTitle.textContent = subject.name;
    subjectDescription.textContent = subject.description;
}

displaySubjects();