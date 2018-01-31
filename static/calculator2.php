<?php
    header("Access-Control-Allow-Origin: *");
    // For 4.3.0 <= PHP <= 5.4.0
    if (!function_exists('http_response_code')) {
        function http_response_code($newcode = NULL) {
            static $code = 200;
            if($newcode !== NULL) {
                header('X-PHP-Response-Code: '.$newcode, true, $newcode);
                if(!headers_sent())
                    $code = $newcode;
            }
            return $code;
        }
    }
    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST) {
            $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
            $phone = strip_tags(trim($_POST["phone"]));
            $frontend_years = strip_tags(trim($_POST["frontend_years"]));
            $consultant_years = strip_tags(trim($_POST["consultant_years"]));
            $js_frameworks = strip_tags(trim($_POST["js_frameworks"]));
            $professional = strip_tags(trim($_POST["professional"]));
            $nodejs = strip_tags(trim($_POST["nodejs"]));
            $js_frameworks = strip_tags(trim($_POST["js_frameworks"]));
            $salary = strip_tags(trim($_POST["salary"]));

            if ( empty($phone) OR empty($frontend_years) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo "Invalid fields - require phone, frontend_years and email";
                exit;
            }

            $recipient = "adam@heidmark.se";
            $subject = "New calculation for $email";

            $email_content = "Phone: $phone\n";
            $email_content .= "E-mail: $email\n";
            $email_content .= "---------------\n";
            $email_content .= "Stats:\n";
            $email_content .= "Experience in frontend (years): $frontend_years\n";
            $email_content .= "Experience as a consultant (years): $consultant_years\n";
            $email_content .= "Number of mastered JS frameworks: $js_frameworks\n";
            $email_content .= "Frontend professional: $professional\n";
            $email_content .= "Knows NodeJS: $nodejs\n";
            $email_content .= "Calculated salary: $salary kr";

            $email_headers = "From: <$email>";

            // Send the email.
            if (mail($recipient, $subject, $email_content, $email_headers)) {
                // Set a 200 (okay) response code.
                http_response_code(200);
                echo "Thank You! Your message has been sent.";
            } else {
                // Set a 500 (internal server error) response code.
                http_response_code(500);
                echo "Oops! Something went wrong and we couldn't send your message.";
            }
        }
    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
