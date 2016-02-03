//================================================================================
// Select multiple (with activerecord-relation-behavior extension)
//================================================================================

// In model, do this (replace with proper attributes of course):

// Add this safe attribute:
array('category', 'safe'),

// Add this relation:
'categories' => array(self::MANY_MANY, 'Category', 'category_assignement(product_id, category_id)'),

// Add this behavior:
'activerecord-relation'=>array(
    'class'=>'ext.activerecord-relation-behavior.EActiveRecordRelationBehavior',
),

// In controller, add this:
$model->categories = isset($_POST['Product']['categories']) ? $_POST['Product']['categories'] : array();

// or if you use form manager, this:
'onAfterSetAttributes' => function($event)
{
	$model = $event->params['model'];

	$model->categories = isset($_POST['Product']['categories']) ? $_POST['Product']['categories'] : array();
},

// And finally, in your view file add the field:
<div class="row">
	<?php echo $form->labelEx($model,'categories'); ?>
	<?php echo $form->listBox($model,'categories', CHtml::listData(Category::model()->findAll(), 'id', 'name'), array("multiple"=>"multiple")); ?>
	<?php echo $form->error($model,'categories'); ?>
</div>
