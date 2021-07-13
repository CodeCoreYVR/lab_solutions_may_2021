class ReviewsController < ApplicationController

    def create
        @product = Product.find params[:product_id]
        @review = Review.new review_params
        @review.product = @product
        @review.user = current_user
        if @review.save
            redirect_to product_path(@product)
        else
        @reviews = @product.reviews
        render 'products/show'
        end
    end

    def destroy
        @product = Product.find params[:product_id]
        @review = Review.find params[:id]
        if can?(:crud,@review)
            @review.destroy
            flash[:success] = "Deleted"
            redirect_to product_path(@product)
        else
            redirect_to root_path
        end
        
    end
    

    private
    def review_params
        params.require(:review).permit(:body,:rating)
    end
end
