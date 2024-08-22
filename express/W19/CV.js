% --- LaTeX CV Template - S. Venkatraman ---

% Set document class and font size
\documentclass[letterpaper, 11pt]{article}
\usepackage[utf8]{inputenc}

% Package imports
\usepackage{setspace, longtable, graphicx, hyphenat, hyperref, fancyhdr, ifthen, everypage, enumitem, amsmath, setspace}

% --- Page layout settings ---

% Set page margins
\usepackage[left=1in, right=1in, bottom=0.7in, top=0.7in]{geometry}

% Set line spacing
\renewcommand{\baselinestretch}{1.15}

% --- Page formatting ---

% Set link colors
\usepackage[dvipsnames]{xcolor}
\hypersetup{colorlinks=true, linkcolor=RoyalBlue, urlcolor=RoyalBlue}

% Set font to Libertine, including math support
\usepackage{libertine}
\usepackage[libertine]{newtxmath}

% Remove page numbering
\pagenumbering{gobble}

% --- Document starts here ---

\begin{document}

% Name and date of last update to this document
\noindent{\Huge{Ricardo Velez}}

\noindent{\text{Software Engineer}}

% --- Contact information and other items ---

\vspace{0.5cm} 
\begin{center}
\begin{tabular}{lll}
% Line 1: Email, GitHub, office location
\textbf{Email}: ricardo.velez96@gmail.com      &
\hspace{0.35in} \textbf{GitHub}: \href{https://github.com/ricardojvelez}{ricardojvelez} \\

% Line 2: Phone number, LinkedIn, citizenship
\textbf{Phone}: +351 939 607 547   & 
\hspace{0.35in} \textbf{LinkedIn}: \href{https://www.linkedin.com/in/ricardojvelez}{ricardojvelez}
\end{tabular}
\end{center}


% --- Start the two-column table storing the main content ---

% Set spacing between columns
\setlength{\tabcolsep}{8pt}

% Set the width of each column
\begin{longtable}{p{0.8in}p{5.3in}}
& \\

% --- Section: Skills ---
\color{Blue}{Skills}
& \textbf{Languages:} TypeScript, JavaScript, Ruby, CSS, HTML  \\
& \textbf{Libraries/Frameworks:} React, Rails \\
& \textbf{Testing:} React Testing Library, Jest, RSpec, Capybara \\
\\ 



% --- Section: Experience ---

\color{Blue}{Experience}

& \textbf{Reachdesk - Frontend Software Engineer} \hfill Jan, 2022 - Present \par 
• Led the technical investigation of Recipient Choice, an external React App, facilitating user browsing and product redemption. This initiative resulted in an 8\% increase in product claims.\par 
• Reworked the gift-sending process by collaborating with product and design teams. Defined backend and frontend requisites to align with project goals. Implemented custom dashboards to monitor the changes.\par
• Optimized performance across the app to accommodate the growing user inputs, resulting in a 90\% reduction in load time in some cases.\par

& \par

& \textbf{MIT xPro - Learning Facilitator} \hfill Feb 2023 - Present \par 
• Guide and mentor students across the MongoDB, Express.js, React, and Noje.js stack, addressing technical support through discussion boards and tickets. \par
• Facilitate a weekly open office hour, providing live support and addressing questions. \par
• Facilitate 1:1 sessions to offer guidance on capstone projects. \par
• Grade capstone projects.\par
• Managed over 30 students, from different locations and time zones for 9 months.\par

& \par

& \textbf{Talkdesk - Fullstack Software Engineer } \hfill Nov 2020 - Dec 2021 \par 
• Integrated the App with internal and external APIs. \par
 •	Automated database maintenance with jobs to eliminate faulty data. \par
  •	Developed and improved components by adding dynamic CSS features, optimizing load times, and upgrading their responsiveness.\par
\\
  % --- Section: Education ---
\color{Blue}{Education} 
& \textbf{ISEL} \hfill Lisbon, Portugal \\ 
& Bachelor in Software Engineering \\ \\
& \textbf{Certifications}  \\ 
& \href{https://www.credly.com/badges/e6aad84c-bc13-4e05-b825-cf73e15a3466}{Professional Scrum Master™ I (PSM I)}&
& 



% --- End of CV! ---

\end{longtable}
\end{document}