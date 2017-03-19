class UserMailerPreview < ActionMailer::Preview
  def welcome
    workingplace = WorkingPlace.first
    UserMailer.welcome(workingplace)
  end
end
