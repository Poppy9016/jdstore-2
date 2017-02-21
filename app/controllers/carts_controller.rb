class CartsController < ApplicationController
    def checkout
        @order = Order.new
    end

    def clean
        if current_cart.cart_items.present?
            current_cart.clean!
            flash[:warning] = '已清空购物车'
        else
            flash[:alert] = '购物车内没有物品,请先加入物品'
        end
        redirect_to :back
    end
end
