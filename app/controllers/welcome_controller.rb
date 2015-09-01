class WelcomeController < ApplicationController
  def index

    @viewer = ContactEmailer.new
    respond_to do |format|
      #flash[:notice] = 'Welcome to my Website.'
      format.html { }
    end

  end
  def send_mail
    @viewer = ContactEmailer.new(params[:viewer])

    respond_to do |format|
      if @viewer.save && ViewerMailer.contact_email(@viewer).deliver
        flash[:notice] = 'Your mail was sent, Thanks.'
      else
        flash[:notice] = 'Email sending fail.'
      end
      format.js { }
    end
    end

end
