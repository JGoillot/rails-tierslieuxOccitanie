class UserMailer < ApplicationMailer
  def welcome(workingplace)
    @workingplace = workingplace  # Instance variable => available in view

    mail(to: 'tlo@gmail.com', subject: 'Nouveau Co-Working')
    # This will render a view in `app/views/user_mailer`!
  end
end
