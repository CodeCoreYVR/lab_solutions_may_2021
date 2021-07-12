class ProductsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    
    before_action :find_product, only: [:edit, :update, :show, :destory]
    
    def index
        @products = Product.all
    end
    
    def new
        @product = Product.new
    end
    
    def create
        @product = Product.new product_params
        @product.user = current_user
        if @product.save
            redirect_to product_path(@product.id)
        else
            render :new
        end
    end
    
    def show

        #Lab for rails One to Many
        @review = Review.new

        @reviews = @product.reviews
    end
    
    def destroy
        
        @product.destroy
        redirect_to products_path
    end

    def edit
        
    end

    def update
        
        if @product.update product_params
            redirect_to product_path(@product.id)
        else
            render :edit
        end
    end
    
    
    
    private
    def product_params
        params.require(:product).permit(:title,:description,:price)
    end
    
    def find_product
        @product =  Product.find(params[:id])
    end
    
end
