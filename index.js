<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>STEM Career Project</title>

<style>
body{
  margin:0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #000000, #1a1a1a, #330000);
  color:white;
  overflow-x:hidden;
}

header{
  text-align:center;
  padding:40px;
  background:linear-gradient(to right, black, red, orange);
  animation: slideDown 1.5s ease;
}

section{
  max-width:1000px;
  margin:40px auto;
  padding:20px;
}

h2{
  text-align:center;
  color:orange;
}

.box{
  background:rgba(0,0,0,0.8);
  border:3px solid red;
  border-radius:15px;
  padding:20px;
  margin:30px 0;
  box-shadow:0 0 20px orange;
  animation: fadeIn 2s ease;
  transition: transform 0.3s;
}

.box:hover{
  transform: scale(1.03);
}

.big-box{
  border:4px solid orange;
  box-shadow:0 0 30px red;
  animation: pulse 2s infinite;
}

.top-choice{
  border:4px solid lime;
  box-shadow:0 0 35px lime;
}

ul{
  line-height:1.8;
}

footer{
  text-align:center;
  padding:20px;
  background:black;
  color:orange;
}

@keyframes fadeIn{
  from{opacity:0; transform:translateY(40px);} 
  to{opacity:1; transform:translateY(0);} 
}

@keyframes slideDown{
  from{transform:translateY(-100px); opacity:0;}
  to{transform:translateY(0); opacity:1;}
}

@keyframes pulse{
  0%{box-shadow:0 0 15px red;}
  50%{box-shadow:0 0 40px orange;}
  100%{box-shadow:0 0 15px red;}
}
</style>
</head>
<body>

<header>
  <h1>STEM Career Research Project</h1>
  <h3>Top Career Choice = Cloud Computing</h3>
</header>

<section>

<!-- Career 1 -->
<div class="box">
<h2>Career #1: Software Engineer</h2>
<p><b>Description:</b> Designs, builds, tests, and maintains computer programs and apps.</p>
<p><b>Education:</b> Bachelor’s in Computer Science</p>
<p><b>Average Salary:</b> $90,000 – $140,000</p>
<p><b>Companies:</b> Google, Apple, Microsoft</p>
<p><b>Job Outlook:</b> Very strong</p>
</div>

<!-- Career 2 -->
<div class="box">
<h2>Career #2: Enterprise Device Management Specialist</h2>
<p><b>Description:</b> Manages and secures company computers and mobile devices.</p>
<p><b>Education:</b> IT Degree or Certifications</p>
<p><b>Average Salary:</b> $65,000 – $105,000</p>
<p><b>Companies:</b> Schools, Hospitals, Businesses</p>
<p><b>Job Outlook:</b> Stable and growing</p>
</div>

<!-- Career 3 SHORT CLOUD -->
<div class="box">
<h2>Career #3: Cloud Computing</h2>
<p><b>Description:</b> Works with online servers and data storage systems.</p>
<p><b>Education:</b> IT/Computer Science Degree</p>
<p><b>Average Salary:</b> $85,000 – $120,000</p>
<p><b>Companies:</b> Amazon, Microsoft, Google</p>
<p><b>Job Outlook:</b> Growing very fast</p>
</div>

<!-- Career 4 BIG CLOUD TOP -->
<div class="box big-box top-choice">
<h2>Career #4: Cloud Computing Engineer (TOP CHOICE)</h2>

<h3>Detailed Job Description</h3>
<p>Cloud engineers design, manage, and secure online servers and databases for companies around the world.</p>

<h3>Entry & Average Salary</h3>
<ul>
<li>Entry: $70,000 – $90,000</li>
<li>Average: $90,000 – $130,000</li>
</ul>

<h3>Example Work Environments</h3>
<ul>
<li>Data Centers</li>
<li>Remote Work</li>
<li>Tech Offices</li>
<li>Large Corporations</li>
</ul>

<h3>Main Duties</h3>
<ul>
<li>Maintain cloud servers</li>
<li>Manage security systems</li>
<li>Backup and protect data</li>
<li>Fix system problems</li>
<li>Monitor performance</li>
</ul>

<h3>Important Skills & Abilities</h3>
<ul>
<li>Networking</li>
<li>Problem Solving</li>
<li>Linux</li>
<li>Cybersecurity</li>
<li>Time Management</li>
<li>Communication</li>
</ul>

<h3>Education / Training Required</h3>
<ul>
<li>Bachelor’s in IT or Computer Science</li>
<li>AWS / Azure Certifications</li>
<li>Internships</li>
<li>Hands-on Practice</li>
</ul>

<h3>3 Places to Get Trained</h3>
<ul>
<li>Local Community College</li>
<li>AWS Training Center</li>
<li>Google Cloud Training</li>
</ul>

<h3>Future Job Outlook</h3>
<p>Cloud computing jobs are in extremely high demand as companies move to online systems.</p>

<h3>Companies That Hire</h3>
<ul>
<li>Amazon (AWS)</li>
<li>Microsoft (Azure)</li>
<li>Google (Cloud)</li>
</ul>
</div>

</section>

<footer>
<p>STEM Career Project</p>
</footer>

</body>
</html>
