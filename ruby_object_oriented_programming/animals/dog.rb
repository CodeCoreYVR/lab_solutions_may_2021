require_relative './animal.rb'
class Dog < Animals
    def bark
        puts "wooooooof"
    end
    
    def eat
        super
        puts "Bones are yummy!"
    end
end
