class ViewerMailer < ActionMailer::Base
  default from: "webmailer08@gmail.com"

  def contact_email(viewer)
    @viewer = viewer
    mail(to: 'tuhinshahriar@gmail.com', subject: @viewer.subject, name: @viewer.name, email: @viewer.email )
  end

end
