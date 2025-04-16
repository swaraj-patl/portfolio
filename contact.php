<?php include 'includes/header.php'; ?>
  <h2>Contact Us</h2>
  <form id="contactForm" action="contact_process.php" method="POST" onsubmit="return validateForm();">
    <label>Name:</label><input type="text" name="name" id="name"><br>
    <label>Email:</label><input type="email" name="email" id="email"><br>
    <label>Message:</label><textarea name="message" id="message"></textarea><br>
    <button type="submit">Submit</button>
  </form>
  <div id="confirmationMessage"></div>
<?php include 'includes/footer.php'; ?>
