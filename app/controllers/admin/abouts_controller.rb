class Admin::AboutsController < ApplicationController
    before_action :authenticate_user!
    before_action :admin_required
    layout 'admin'
    def index
        @abouts = About.all
   end

    def edit
        @about = About.find(params[:id])
   end

    def new
        @about = About.new
    end

    def update
        @about = About.find(params[:id])

        if @about.update(about_params)
            redirect_to admin_abouts_path
        else
            render :edit
        end
    end

    def create
        @about = About.new(about_params)

        if @about.save
            redirect_to admin_abouts_path
        else
            render :new
        end
    end

    def destroy
        @about = About.find(params[:id])

        @about.destroy

        redirect_to admin_abouts_path
  end

    private

    def about_params
        params.require(:about).permit(:title, :description, :url)
    end
end
